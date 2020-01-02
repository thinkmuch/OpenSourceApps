import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBU7EkHaM4H2FGWC4dZoyQIONww-qXq1n9MK8q4NqLQOBRndC685c-x6H5UNyGyCeCCr8GDqJTUYyIvJK_ndnLk64Wx7ipFrwEZZUxPWBFjZzDoDSV6C_FX4HeU5lUGFKfkbTnvkh5VdR4WyDdaWXbBXNaTqgJH'
    });

    return this._http.get('https://api.spotify.com/v1/browse/new-releases', { 
      headers 
    });
  }

  getArtista(artista: string) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBU7EkHaM4H2FGWC4dZoyQIONww-qXq1n9MK8q4NqLQOBRndC685c-x6H5UNyGyCeCCr8GDqJTUYyIvJK_ndnLk64Wx7ipFrwEZZUxPWBFjZzDoDSV6C_FX4HeU5lUGFKfkbTnvkh5VdR4WyDdaWXbBXNaTqgJH'
    });

    return this._http.get(`https://api.spotify.com/v1/search?q=${artista}&type=artist&limit=10`, { 
      headers 
    });
  }
}