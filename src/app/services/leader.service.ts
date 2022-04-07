import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';
import {resolve} from '@angular/compiler-cli/src/ngtsc/file_system';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));
  }
  getFeaturedCorporate(): Observable<Leader[]> {
    return of(LEADERS.filter((lead)=>(lead.featured))).pipe(delay(2000));
  }

  getLeader(id: string): Observable<Leader>{
    return of(LEADERS.filter((leader) =>leader.id===id)[0]).pipe(delay(2000));
  }
}
