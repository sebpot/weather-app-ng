import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, take } from "rxjs/operators";
import { throwError } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    constructor(private http: HttpClient){}

    getWeather(location: string) {
        return this.http.get(
            'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + environment.apiKey
        )
        .pipe(
            take(1),
            catchError(errorRes => {
                return throwError(errorRes);
            })
        );
    }
}