import { transformAndValidate } from 'class-transformer-validator'
import {
  IsNumber,
  IsNotEmpty,
  IsString,
  ValidateNested,
  Length
} from 'class-validator'
import { IWeather, Weather } from './common'

interface IHourly {
  weather: IWeather[];
  temp: number;
}

interface ICurrent {
  weather: IWeather[];
  temp: number;
}

export interface IDayInThePast {
  current: ICurrent;
  hourly: IHourly[];
  lat: number;
  lon: number;
  timezone: string;
}

class Hourly implements IHourly {
  @IsNotEmpty()
  @ValidateNested()
  weather!: Weather[];

  @IsNotEmpty()
  @IsNumber()
  temp!: number;
}

class Current implements ICurrent {
  @IsNotEmpty()
  @ValidateNested()
  weather!: Weather[];

  @IsNotEmpty()
  @IsNumber()
  temp!: number;
}

export class DayInThePast implements IDayInThePast {
  @IsNotEmpty()
  @ValidateNested()
  current!: Current;

  @IsNotEmpty()
  @ValidateNested()
  hourly!: Hourly[];

  @IsNotEmpty()
  @IsNumber()
  lat!: number;

  @IsNotEmpty()
  @IsNumber()
  lon!: number;

  @IsNotEmpty()
  @IsString()
  @Length(1, Infinity)
  timezone!: string;
}

export async function getWeatherFromPast (lat:number, lon:number, dt: number, APIKey: string): Promise<DayInThePast | void> {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${dt}&appid=${APIKey}`
    )

    const data = await response.json()
    console.log(data)

    const result = await transformAndValidate(DayInThePast, data)

    if (Array.isArray(result)) {
      return result[0]
    }

    return result
  } catch (err) {
    console.error(err)
  }
}
