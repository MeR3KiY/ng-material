import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RedesignComponent } from '../redesign.component';

@Injectable({
  providedIn: 'root'
})
export class RedesignService {



  constructor(private http: HttpClient) { }

  getJoke() {
    return this.http.get('https://v2.jokeapi.dev/joke/Any?safe-mode');
  }


}
