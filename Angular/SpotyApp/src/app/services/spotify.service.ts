import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD0E4VflgrhB7gY0CuiTFvztsROPzmVknkoWS_tYeJeiB6NHebV5xZ5mN9oQ69VEGNIWapZ5M2mWcLKKIgT-KYEjDSWo4UuoFz1NDW0DoyYkmHYmzy7XZKEjfG3yUzQIilXfvAQr630uB2tMsvYX8mMhRsVBpiM'
    });

    return this._http.get('https://api.spotify.com/v1/browse/new-releases', { 
      headers 
    });
  }
}