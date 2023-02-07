import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { rocket } from 'src/app/models/rocket.model';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.scss']
})
export class RocketComponent implements OnInit {

  // decoradores de entrada y salida del componente

  @Input() Rocket: rocket = {
    id: ' ',
    name: ' ',
    description: '',
    country: ' ',
    height: 0,
    flickr_images: [],
  };

  @Output() showRocket = new EventEmitter<string>();


  showRocketDetail = false;

  constructor() { }

  ngOnInit(): void {
  }

  onShowDetail(){
    //this.showRocketDetail = !this.showRocketDetail;
    this.showRocket.emit(this.Rocket.id);  //para transmitir un evento de cualquier tipo
  }

}
