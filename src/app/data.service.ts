import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  getList() {
    return this.http.get('http://localhost:8080/api/read');
  }

  createList(title, detail){
    let body = new HttpParams().set("title",title).set("detail", detail);
    return this.http.post('http://localhost:8080/api/create', body.toString(),{headers: { 'Content-Type': 'application/x-www-form-urlencoded'}}).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
  }

  deleteList(id){
    return this.http.delete('http://localhost:8080/api/delete/' + id).subscribe()
  }

  updateList(id,title,detail){
    let body ={
      "title" : title,
      "detail" : detail
    }
    return this.http.put('http://localhost:8080/api/update/'+ id, body,{headers: { 'Content-Type': 'application/json'}}).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
  }
}
