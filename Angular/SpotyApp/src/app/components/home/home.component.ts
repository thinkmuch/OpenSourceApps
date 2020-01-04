import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];
  loading: boolean;

  constructor(private _spotifyServices: SpotifyService) { 
    this.loading = true;
  }

  ngOnInit() {

    this._spotifyServices.getNewReleases()
        .subscribe((response: any) => {
          this.newSongs = response;
          this.loading = false;
        });
  }

}
