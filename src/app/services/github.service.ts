import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
	username: string;
	client_id = '5ca43067f093ec2db2b7';
	client_secret = '4324e4732a4d60a025eebecf583b4133fe975688';

	constructor(private http: Http){
		console.log('GithubService running...')
		this.username = "JesseSoldat";
		
	}

	updateUser(username:string){
		this.username = username;
	}

	getUser(){
		return this.http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
			.map(res => res.json());
	}

	getRepos(){
		return this.http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
			.map(res => res.json());
	}
}