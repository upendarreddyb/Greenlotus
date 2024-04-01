import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }
  GetItems = "http://localhost:3000/getitem";
  ContactUs = "http://localhost:3000/contatctUs";
  UploadLogo = "http://localhost:3000/uploadLogo";
  getItems(): Observable<any>{
    return this._http.get(`${this.GetItems}`);
  }


  contactus(form:any):Observable<any>{
    const headers = {
      'content-type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type'
    };
    return  this._http.post<any>(`${this.ContactUs}/`,form,{'headers': headers })
 }



 uploadLogo(form:any):Observable<any>{
  const headers = {
    'content-type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
  return  this._http.post<any>(`${this.UploadLogo}/`,form,{'headers': headers })
}



}
