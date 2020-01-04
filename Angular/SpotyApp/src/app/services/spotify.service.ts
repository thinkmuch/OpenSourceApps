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
      'Authorization': 'Bearer BQBlNgNkXJxwkBTPIjhmSaHz6xU_aWLKAzpi-qBQpjOfh_D3Ft1Ul5dWr1IIlU1Ud0-UgujjsRuNYZ9gAX9TRP2tFy8SYMQWJlf4aV9KQgDKaTHqeLW6_FmL7YxE76Uon1Q4bxBikrDxk70Sf_rsDRe8I6uisLA-'
    });

    return this._http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(map(response => response['albums'].items));
  }

  getArtista(artista: string) {
    return this.getQuery(`search?q=${artista}&type=artist&limit=10`).pipe(map(response => response['artists'].items));
  }
}