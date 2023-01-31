import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CreateRocketDTO, rocket } from 'src/app/models/rocket.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})


export class NavComponent implements OnInit {

  @Output() newRocket = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onShowCreate(){
    this.newRocket.emit();
  }
/*   createNew(){
    const rocket: CreateRocketDTO = {
      id: '6',
      name: 'Nuevo R',
      country: 'Col',
      description: 'nuevo cohete',
      flickr_images: [`https://placeimg.com/640/480/any?random=${Math.random()}`],
      height: 80
    }
    this.newRocket.emit(rocket);
    } */
    
  }
