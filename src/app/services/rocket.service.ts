import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateRocketDTO, rocket, UpdateRocketDTO } from '../models/rocket.model';

@Injectable({
  providedIn: 'root'
})
export class RocketService {

    private apiUrl = `${environment.API_URL}/rockets`;

  constructor(
    private http: HttpClient
  ) { }
  
  //Se hace el CRUD
  
  getAllRocket() {
    return this.http.get<rocket>(this.apiUrl);
   }

   getRocket(id: string){
    return this.http.get<rocket>(`${this.apiUrl}/${id}`);
   }

  createRocket(dto:CreateRocketDTO) {
      return this.http.post<rocket>(this.apiUrl, dto);
   }

   updateRocket(dto: UpdateRocketDTO, id: string){
    return this.http.put<rocket>(`${this.apiUrl}/${id}`, dto);
   }

   deleteRocket(id: string){
    return this.http.delete<rocket>(`${this.apiUrl}/${id}`);
   }
}
