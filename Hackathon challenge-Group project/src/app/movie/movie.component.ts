import { ServiceDataService } from './../services/service-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  myMovie:any;
  constructor(private movieService:ServiceDataService) { }

  ngOnInit(): void {
    this.myMovie=this.movieService.getnewMovie()
  }

}
