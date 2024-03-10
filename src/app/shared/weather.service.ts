import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, take } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    constructor(private http: HttpClient){}

    getWeather(location: string) {
        return this.http.get(
            'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=11aa189c0c9a71c63152dd7d7115dd5a'
        )
        .pipe(
            take(1),
            catchError(errorRes => {
                return throwError(errorRes);
            })
        );
    }
}