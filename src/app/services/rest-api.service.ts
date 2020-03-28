import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface User {
  id: string;
  name: string;
  email: string;
  website: string;
}

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  api: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api)
  }

  getTweets(): Observable<any>{
    const uri = "https://prod-54.westeurope.logic.azure.com:443/workflows/04a8bde8825846bd9ae5e36927656fd1/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=W5C_VD3z14vOhYqf1wEgupXH2yDxTLca1QODXccnKHs";
    const payload = {
      searchParams: "(from:GSCP_GR OR from:pepattikis OR from:EMY_HNMS OR from:eody_gr OR from:YpYgGR)"
    };
    return this.http.post(uri,payload);//.pipe(
      //map((r: any)=> {     }));

     
  }
  getWeather(): Observable<any>{
    const apiuri = "https://api.openweathermap.org/data/2.5/forecast?q=korydallos,gr&appid=1987914432fb4a4dec6a7505daa91d45&lang=el"
    return this.http.get<User[]>(apiuri);
  }
}

export interface Tweets{
  Name : string;

}