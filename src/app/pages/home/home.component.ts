import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/types/api';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  response$: Observable<Response[]>;


  constructor(private api:ApiService) { }
  
  ngOnInit(): void {
    this.response$ = this.api.getPaises();
  }
}