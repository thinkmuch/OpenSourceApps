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
      'Authorization': 'Bearer BQDTc4nxHWGcE5AdJMKcOHWu5uTaQd6bVNm31qTDKU5ZnfE9DUYikIU0vAGYPdJRjfsiKoKljq8idNkjGR2C4OJ1UFYBgIrxKL_GVRx2vKQlDQ_3U_3KfiMHWt1drXllhHKZAnFSkOdhMVfLbL8Jgn4i1IiyMo1c'
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