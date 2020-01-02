import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];

  constructor(private _spotifyServices: SpotifyService) { }

  ngOnInit() {
  }

  buscarArtista(artista: string) {
    this._spotifyServices.getArtista(artista)
      .subscribe((response: any) => {
        
        this.artistas = response.artists.items;
        console.log(this.artistas);
      });
  }

}
