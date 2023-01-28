import { Component, OnInit, Input } from '@angular/core';
import { rocket, UpdateRocketDTO } from 'src/app/models/rocket.model';
import { RocketService } from 'src/app/services/rocket.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss']
})
export class RocketsComponent implements OnInit {

  rockets: rocket[] = [];
  Rocket: rocket = {
    id: ' ',
    name: ' ',
    description: '',
    country: ' ',
    height: 0,
    flickr_images: [],
  }
  showRocketDetail = false;
  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';
  changeView: boolean=false;

  constructor(
    private rocketService: RocketService
  ) { }

  ngOnInit(): void {
    this.rocketService.getAllRocket()
      .subscribe(data => {
        this.rockets = this.rockets.concat(data);
      })
  }

  toogleRocketDetail() { 
    if (this.showRocketDetail===true && this.changeView===true){
      this.showRocketDetail = false;
      this.changeView = false;
    } else if (this.showRocketDetail===false && this.changeView===false){
        this.showRocketDetail = true; 
    } else if (this.showRocketDetail===true && this.changeView===false){
      this.showRocketDetail = false; 
  }
  }

  onShowDetail(id: string) {
    this.statusDetail = 'loading';
    //En caso de darle dos veces al boton

    if (this.Rocket.id != '' && this.Rocket.id == id && this.showRocketDetail == true) {
      this.showRocketDetail = false;
      this.changeView=false;
      this.statusDetail = 'success';
      return;
    }

    if (this.Rocket.id != '' && this.Rocket.id == id && this.showRocketDetail == false) {
      this.showRocketDetail = true;
      this.changeView=false;
      this.statusDetail = 'success';
      return;
    }

    if (this.Rocket.id != '' && this.Rocket.id != id && this.showRocketDetail == true) {
      this.showRocketDetail = false;
      this.changeView=false;
    }

    this.rocketService.getRocket(id)
      .subscribe(data => {
        this.Rocket = data;
        if (!this.showRocketDetail && data.id != null) {
          this.statusDetail = 'success';
          this.toogleRocketDetail();
        }
      }, errorMsg => {
        this.statusDetail = 'error';
        Swal.fire({
          title: 'Not found rocket',
          text: 'Este cohete no existe',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
      });
  }

  updateRocket() {
    const id = this.Rocket.id;
    const changes: UpdateRocketDTO = {
      name: 'Nuevo Rocket'
    }
    this.rocketService.updateRocket(changes, id)
      .subscribe(data => {
        this.Rocket = data;
        this.rockets = this.rockets.map((item) => {
          if (item.id === this.Rocket.id) {
            return data;
          }
          return item;
        })
      })
  }

  deleteRocket() {
    const id = this.Rocket.id;
    this.rocketService.deleteRocket(id)
      .subscribe(() => {
        const rocketIndex = this.rockets.findIndex(item => item.id === this.Rocket.id);
        this.rockets.splice(rocketIndex, 1);
        this.showRocketDetail = false;
      })
  }

  onChangeView() {
    this.changeView =!this.changeView;
  }

  backNsave () {
    this.onChangeView();
    this.rocketService.updateRocket(this.Rocket,this.Rocket.id)
        .subscribe(data => {
          const rocketIndex = this.rockets.findIndex(item => item.id === this.Rocket.id);
          this.rockets.splice(rocketIndex, 1, data);
        });
          
  }
}