import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }
  
  // Now here I will define the POST, GET, PUT, DELETE 0
  // Create Restaurant using POST method.

  postRestaurant(data:any){
    return this._http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
      return res;
    }))
  }

  // Get Restaurant data using GET method.
  getRestaurant(){
    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }))
  }

  // Update Restaurant data using UPDATE mthod.
  updateRestaurant(data:any, id:number){
    return this._http.get<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }

  // Delete Restaurant data using DELETE method.
  deleteRestuarant(id:number){
    return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }
}
