import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Match } from './match';
import 'rxjs/add/operator/map';

@Injectable()
export class MatchService {

  void_api:String = 'https://api.entervoid.com/'

  constructor(private http: Http) {}

  getMatches () : Observable<Match> {
    return this.http.get(this.void_api + 'matches').map(res => res.json());
  }

}
