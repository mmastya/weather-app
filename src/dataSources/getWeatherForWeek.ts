import { transformAndValidate } from 'class-transformer-validator'
import {
  IsNumber,
  IsNotEmpty,
  IsString,
  ValidateNested,
  Length
} from 'class-validator'
import { IWeather, Weather } from './common'

interface IAlert {
  event: string;
  senderName: string;
  description: string;
  start: number;
}
interface iTemp {
  day: number;
  min: number;
  max: number;
}

interface IFeelsLike {
  day: number;
}

interface IDaily {
  temp: iTemp;
  weather: IWeather[];
  feelsLike: IFeelsLike;
}

export interface IDay {
  alerts: IAlert[];
  daily: IDaily[];
  lat: number;
  lon: number;
  timezone: string;
}

class FeelsLike implements IFeelsLike {
  @IsNotEmpty()
  @IsNumber()
  day!: number;
}

class Temp implements iTemp {
  @IsNotEmpty()
  @IsNumber()
  day!: number;

  @IsNotEmpty()
  @IsNumber()
  min!: number;

  @IsNotEmpty()
  @IsNumber()
  max!: number;
}

class Daily implements IDaily {
  @IsNotEmpty()
  @ValidateNested()
  temp!: Temp;

  @IsNotEmpty()
  @ValidateNested()
  weather!: Weather[];

  @IsNotEmpty()
  @ValidateNested()
  feelsLike!: FeelsLike;
}

class Alert implements IAlert {
  @IsNotEmpty()
  @IsString()
  @Length(1, Infinity)
  event!: string;

  @IsString()
  senderName!: string;

  @IsString()
  description!: string;

  @IsNotEmpty()
  @IsNumber()
  start!: number;
}

export class Day implements IDay {
  @IsNotEmpty()
  @ValidateNested()
  alerts!: Alert[];

  @IsNotEmpty()
  @ValidateNested()
  daily!: Daily[];

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

export async function getWeatherForWeek (
  lat: number,
  lon: number,
  APIKey: string
): Promise<Day | void> {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=${APIKey}`
    )

    const data = await response.json()

    const result = await transformAndValidate(Day, data)

    if (Array.isArray(result)) {
      return result[0]
    }

    return result
  } catch (err) {
    console.error(err)
  }
}
