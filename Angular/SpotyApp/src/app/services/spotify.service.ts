import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDwk2lTCJeLYBAHtcz76vNOa1Zzl8IaNQhzkzs1xSMDglAnYqw9PmnuFZxwzTr4XSdDOKNWhmdedWzHjbMFcSx6nIONdMEI0YKEksrHHLzxKqgrF9ZFvX2RP0ji7SQU1qu6HDVme8bsfSvqc8CqapwLbeYcDT0H'
    });

    return this._http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(map(response => response['albums'].items));
  }

  getArtistas(artista: string) {
    return this.getQuery(`search?q=${artista}&type=artist&limit=10`).pipe(map(response => response['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }
}