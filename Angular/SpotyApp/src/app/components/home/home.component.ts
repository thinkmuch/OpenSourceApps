import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];

  constructor(private _spotifyServices: SpotifyService) { }

  ngOnInit() {

    this._spotifyServices.getNewReleases()
        .subscribe((response: any) => {

          console.log(response.albums.items);
          this.newSongs = response.albums.items;
        });
  }

}
