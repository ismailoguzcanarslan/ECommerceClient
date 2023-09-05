import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient, @Inject("baseUrl") private baseUrl : string) { }

  private createUrl(requestParameters: Partial<RequestParameters>) : string{
    return `${requestParameters.baseUrl ? requestParameters.baseUrl : this.baseUrl}/${requestParameters.controller}${requestParameters.action ? `/${requestParameters.action}`: ""}`;
  }

  get<T>(requestParameters: Partial<RequestParameters>, id?: string) : Observable<T>{
    let url: string = "";
    
    if(requestParameters.fullEndPoint)
      url = requestParameters.fullEndPoint;
    else
      url = `${this.createUrl(requestParameters)}${id ? `/${id}`: ""}`;
    
    return this.httpClient.get<T>(url, {headers: requestParameters.headers});
  }

  post<T>(requestParameters: Partial<RequestParameters>, body: Partial<T>) : Observable<T>{

    let url : string = "";

    if(requestParameters.fullEndPoint)
      url = requestParameters.fullEndPoint;
    else
      url = `${this.createUrl(requestParameters)}`;

    return this.httpClient.post<T>(url, body, {headers: requestParameters.headers});
  }

  put<T>(requestParameters: Partial<RequestParameters>, body: Partial<T>){
    let url : string = ""
    if(requestParameters.fullEndPoint)
      url = requestParameters.fullEndPoint;
    else
      url = `${this.createUrl(requestParameters)}`;

      return this.httpClient.put<T>(url, body, {headers: requestParameters.headers});
  }

  delete(){

  }
}

export class RequestParameters{
  controller? : string;
  action? : string;
  headers? : HttpHeaders;
  baseUrl? : string;
  fullEndPoint? : string; 
}