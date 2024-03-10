export class WeatherData {
    public city: string;
    public country: string;
    public weather: string;
    public temperature: number;
    public wind: number;
    public humidity: number;
    public pressure: number;

    constructor(city: string, country: string, weather: string, temperature: number, wind: number, humidity: number, pressure: number) {
        this.city = city;
        this.country = country;
        this.weather = weather;
        this.temperature = temperature;
        this.wind = wind;
        this.humidity = humidity;
        this.pressure = pressure;
    }
}