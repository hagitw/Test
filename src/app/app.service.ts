
import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {
    private url: string;
    ImgIndex: number;
    header = new Headers();
    constructor(private http: Http) {
        this.header.append('X-token', '2d4e69f4823176197ccf41caa5ee6456');
           this.url = 'http://dvns.me/yaniv/clientest/public/explorePictures?root=path';
        // this.url = 'http://localhost:4200/data';
    }
    GetRoot() {
        // tslint:disable-next-line:no-trailing-whitespace
        return this.http.get(this.url, { headers: this.header })  
        // return this.http.get(this.url);
    }


}

