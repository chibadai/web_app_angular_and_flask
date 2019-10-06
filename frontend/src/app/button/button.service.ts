import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ButtonService {
  private baseUrl = "http://127.0.0.1:5000/"; // Web APIのURL

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json, application/x-www-form-urlencoded"
    })
  };

  constructor(private http: HttpClient) {}

  /** バックエンドとGETで連携する */
  getClick(): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + "get_click")
      .pipe(catchError(this.handleError<any>("get_click", [])));
  }

  /** バックエンドとPOSTで連携する */
  postClick(params: any): Observable<any> {
    return this.http
      .post<any>(this.baseUrl + "post_click", params)
      .pipe(catchError(this.handleError<any>("post_click", [])));
  }
  handleError<T>(arg0: string, arg1: undefined[]): any {
    throw new Error("Method not implemented.");
  }
}
