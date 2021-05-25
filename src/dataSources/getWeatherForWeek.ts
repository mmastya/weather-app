import {
  IsNumber,
  IsNotEmpty,
  IsString,
  ValidateNested,
  Length,
  validate
} from 'class-validator'

interface IAlert {
  event: string;
  senderName: string;
  description: string;
  start: number;
}

interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
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
  id: number;
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

class Weather implements IWeather {
  @IsNotEmpty()
  @IsNumber()
  id!: number;

  @IsNotEmpty()
  @IsString()
  @Length(1, Infinity)
  main!: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, Infinity)
  description!: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, Infinity)
  icon!: string;
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
  @IsNumber()
  id!: number;

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

export async function getWeatherForWeek () {
  try {
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/onecall?lat=53.195873&lon=50.100193&units=metric&lang=ru&appid=6fe7baf784a079185b7c7c4a6042a7ae'
    )

    const data = await response.json()

    console.log(data)

    const day = new Day()

    day.id = 0
    day.alerts = data.alerts.map((rowAlert: any) => {
      const alert = new Alert()

      alert.description = rowAlert.description
      alert.event = rowAlert.event
      alert.senderName = rowAlert.sender_name
      alert.start = rowAlert.start

      return alert
    })
    day.daily = data.daily.map((item: any) => {
      const daily = new Daily()
      const temp = new Temp()
      const feelsLike = new FeelsLike()

      daily.weather = item.weather.map((rowWeather: any) => {
        const weather = new Weather()

        weather.description = rowWeather.description
        weather.icon = rowWeather.icon
        weather.id = rowWeather.id
        weather.main = rowWeather.main

        return weather
      })

      temp.day = item.temp.day
      temp.max = item.temp.max
      temp.min = item.temp.min

      daily.temp = temp

      feelsLike.day = item.feels_like.day

      daily.feelsLike = feelsLike

      return daily
    })
    day.lat = data.lat
    day.lon = data.lon
    day.timezone = data.timezone

    validate(day).then(errors => {
      // errors is an array of validation errors
      if (errors.length > 0) {
        console.log('validation failed. errors: ', errors)
      } else {
        console.log('validation succeed')
      }
    })
  } catch (err) {
    console.error(err)
  }
}

// validate(day).then((errors) => {
//   // errors is an array of validation errors
//   if (errors.length > 0) {
//     console.log('validation failed. errors: ', errors)
//   } else {
//     console.log('validation succeed')
//   }
// })

// validateOrReject(day).catch((errors) => {
//   console.log('Promise rejected (validation failed). Errors: ', errors)
// })
