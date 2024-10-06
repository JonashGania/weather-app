export interface CurrentConditions{
    temp: number;
    feelslike: string;
    humidity: number;
    windspeed: number;
    conditions: string;
    icon: string;
}

export interface HourlyData{
    datetime: string;
    temp: number;
    icon: string;
}

export interface DailyData{
    datetime: string;
    tempmax: number;
    tempmin: number;
    humidity: number;
    windspeed: 6.9,
    icon: string;
    hours: HourlyData[];
}

export interface WeatherData{
    address: string;
    days: DailyData[];
    currentConditions: CurrentConditions;
}