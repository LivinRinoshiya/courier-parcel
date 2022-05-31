import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PickupService {
url='https://784ea086-d974-431c-aa48-7801aa7b2561-bluemix.cloudantnosqldb.appdomain.cloud'
dbUserName='apikey-v2-23epskwaoah6sy6rvo29zejnn1k4kl1llrrq1ot36mry'
dbPassword='69c1d2737d371d9f6b7f6009287e6ccc'
basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.basicAuth
    })
  };
  add(db: string, doc: object): Observable<{}> {
    // const url2 = `${this.url}${db}`;
    const url = this.url + db;
    return this.http.post(url, doc, this.httpOptions)
  }
  get(data:any): Observable<{}> {
    // const url = this.url + db + '/_all_docs?include_docs=true';
    const url = this.url +'courier-db/_find';
    return this.http.post(url,data, this.httpOptions)

  }
  getDocsByID(db: string,id: string): Observable<{}> {
    const url = this.url + db + '/'+id;
    return this.http.get(url, this.httpOptions)
  }
}
