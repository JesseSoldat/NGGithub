import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
	username: string;

	constructor(private http: Http){
		console.log('GithubService running...')
		this.username = "JesseSoldat";
		
	}

	getUser(){
		return this.http.get('http://api.github.com/users/'+this.username)
			.map(res => res.json());

	}
}