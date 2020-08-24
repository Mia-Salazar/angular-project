import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  id = 'c6c95b17'
  key = 'cff9191b3b156b0bfccdb07a1be370b2'

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get('https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/ace?strictMatch=false', 
    {headers: {"app_id": this.id, "app_key": this.key,

  
    } });
  }
}     