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
    console.log('Holaaa')
    this.newRocket.emit();
    
  }
    
  }
