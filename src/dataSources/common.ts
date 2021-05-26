import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator'

export const APIKey = '6fe7baf784a079185b7c7c4a6042a7ae'

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export class Weather implements IWeather {
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
