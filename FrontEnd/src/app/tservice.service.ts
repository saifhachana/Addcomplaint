import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TserviceService {
  public url: string;
	public identity;
	public token;


  constructor(private _http: HttpClient) { 
    this.url = "http://127.0.0.1:8000/newC";
    
  }
  getTest(){

  const body = { title: 'Angular POST Request Example' };

  return this._http.post(this.url,body);
  }

  create(compl){
		const json 	= JSON.stringify(compl);
		let body = new HttpParams();
    body = body.set('json', json);
		
		return this._http.post<any>(this.url,body);
	}

}
