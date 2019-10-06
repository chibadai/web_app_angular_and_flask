import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ButtonService {
  // backend Subject
  private backendSubject: Subject<any> = new Subject();
  backend = this.backendSubject.asObservable();

  private baseUrl = "http://127.0.0.1:5000/"; // Web APIのURL

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json, application/x-www-form-urlencoded"
    })
  };

  constructor(private http: HttpClient) {}

  /** バックエンドとGETで連携する */
  getLoading(): void {
    console.log("getLoading");
    const result = this.http.get<any>(this.baseUrl).subscribe(req => {
      this.backendSubject.next(req);
    });
  }

  /** バックエンドとGETで連携する */
  getClick(): void {
    const result = this.http
      .get<any>(this.baseUrl + "get_click")
      .subscribe(req => {
        this.backendSubject.next(req);
      });
  }

  /** バックエンドとPOSTで連携する */
  // postClick(params: any): Observable<any> {
  postClick(params: any): void {
    const result = this.http
      .post<any>(this.baseUrl + "post_click", params)
      .subscribe(req => {
        this.backendSubject.next(req);
      });
  }
  // handleError<T>(arg0: string, arg1: undefined[]): any {
  //   console.log("handleError");
  //   console.log(arg0);
  //   console.log(arg1);
  //   throw new Error("Method not implemented.");
  // }
}
