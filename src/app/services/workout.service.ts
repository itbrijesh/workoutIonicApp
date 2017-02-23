import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService {
    http: any;
    apiKey: string;
    url: string;
    deleteurl: string;

    constructor(http:Http) {
        this.http = http;
        this.apiKey = 'l24RBo6C_jTS2viq6PpWyAc-556nXKjH';
        this.url = 'https://api.mlab.com/api/1/databases/myweatherionicapp_dev/collections/list1?apiKey='
                    +this.apiKey;
        this.deleteurl = 'https://api.mlab.com/api/1/databases/myweatherionicapp_dev/collections/list1';
    }
    getWorkoutData(){
        return this.http.get( this.url ).map( res => res.json() );
    }

    addWorkoutData(workout) {

        console.log('Add workout service is called...');

        var header = new Headers();
        header.append('Content-Type','application/json');

        return this.http.post( this.url, JSON.stringify(workout), {headers: header} )
                .map( res => { res.json() } );
    }

    deleteWorkoutData( id ) {

        console.log('Delete workout service is called...');

        return this.http.delete( this.deleteurl + "/" + id + "/?apiKey=" + this.apiKey ) ;
    }
}



