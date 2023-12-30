import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from 'src/Interfaces/Moment';
//import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MomentService {
  // private baseApiUrl = environment.baseApiUrl;
    private baseApiUrl = 'http://localhost:3333/';
    private apiUrl = `${this.baseApiUrl}api/moments`

  constructor(private http: HttpClient) { }

 createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData)
 }
}
