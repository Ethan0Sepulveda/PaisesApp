import { Component, Input } from '@angular/core';
import { Response } from '../../types/api';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent {
  @Input()
  response: Response;
}
