import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PickupService {
  hide: boolean=false;
  show: boolean=true;
 
  
url='https://784ea086-d974-431c-aa48-7801aa7b2561-bluemix.cloudant.com'
dbUserName='apikey-v2-23epskwaoah6sy6rvo29zejnn1k4kl1llrrq1ot36mry'
dbPassword='69c1d2737d371d9f6b7f6009287e6ccc'
basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
test_get:any;
  constructor(private http:HttpClient) {}

  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.basicAuth
    })
  };

  add(db: string ,doc: object): Observable<{}> {
    const url = this.url +'/'+ db;
    return this.http.post(url,doc,this.httpOptions)
  }

get(_db: any): Observable<{}> {
const link = this.url + "/courier-db/_all_docs?include_docs=true";
const basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
    return this.http.get(link, { headers: { Authorization: basicAuth}});
  }

getUser(data: any): Observable<{}> {
    const url = this.url +'/courier-db/_find';
    return this.http.post( url,data, this.httpOptions)

}

    showOff(){
        this.hide = !this.hide;
        this.show = !this.show;
        console.log(this.show)
      }
     
}
