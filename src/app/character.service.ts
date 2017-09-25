import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Character } from './character';
import 'rxjs/add/operator/map';

@Injectable()
export class CharacterService {

  void_api:String = 'https://api.entervoid.com/'

  constructor(private http: Http) {}

  getCharacters() : Observable<Character> {
    return this.http.get(this.void_api + 'characters').map(res => res.json());
  }

  getSingleCharacter(id:Number): Observable<Character> {
    return this.http.get(this.void_api + 'characters/' + id.toString()).map(res => res.json());
  }

}
