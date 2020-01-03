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
      'Authorization': 'Bearer BQAIXIOL1ibwGfUF2TcRqEmH1ET1Y6fncXoYackBsITX13dHH7J1HLry5dSEufppdKWvvBeNc2yz_kCHvEdVUV0zjk5W4n-OJKXTVru_-_ozzVFNcj6X2Bzlmg2FcCmBimGwCXTM7-xFGsjknwWTCd43NXF8kIsn'
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