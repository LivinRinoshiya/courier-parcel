import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PickupService {

  // public pickupList = new BehaviorSubject<any>([]);
  // public search = new BehaviorSubject<string>("");

  // getProducts () {
  //   return
  // }
  
url='https://784ea086-d974-431c-aa48-7801aa7b2561-bluemix.cloudant.com'
dbUserName='apikey-v2-23epskwaoah6sy6rvo29zejnn1k4kl1llrrq1ot36mry'
dbPassword='69c1d2737d371d9f6b7f6009287e6ccc'
basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
test_get:any;
storedata2:any;
  constructor(private http:HttpClient) {}

  storeData(formData: any) {
    console.log("From api", formData);
    let data ={
      "name": formData['name'],
      "email": formData['email'],
      "mobile": formData['mobile'],
      "fromplace": formData['fromplace'],
      "toplace":formData['toplace'] ,
      "date": formData['date'],
     
      "type": "pickup",
      // "user_id":this.userId
  }
    return this.http.post<any>(this.url +'courier-db',data,this.httpOptions)
  }
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

  get(db: any): Observable<{}> {
const link = this.url + "/courier-db/_all_docs?include_docs=true";
const basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
    return this.http.get(link, { headers: { Authorization: basicAuth}});
  }

  get1(db: any): Observable<{}> {
    const link = this.url + "/courier-db/_all_docs?include_docs=true";
    const basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
        return this.http.get(link, { headers: { Authorization: basicAuth}});
      }
}
