import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
	moduleId: module.id,
	selector: 'profile',
	templateUrl: 'profile.component.html',
  styleUrls: ['./profile.component.css'],

})

export class ProfileComponent {
	user:any;
	repos:any;
	username:string;

	constructor(private githubService: GithubService){
		//no default
		// this.user = false;
		this.githubService.getUser().subscribe(user => {
            this.user = user;
        })
	}
	searchUser(){
		this.githubService.updateUser(this.username);

		this.githubService.getUser().subscribe(user => {
			this.user = user;
			// console.log(user);
		});

		this.githubService.getRepos().subscribe(repos => {
			this.repos = repos;
			// console.log(repos);
		})
	}
}