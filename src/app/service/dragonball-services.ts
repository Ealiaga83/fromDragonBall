import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  private apiUrl = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      map(response => response.items)
    );
  }
}