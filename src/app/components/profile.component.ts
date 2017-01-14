import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
	moduleId: module.id,
	selector: 'profile',
	templateUrl: 'profile.component.html',
  styleUrls: ['./profile.component.css'],

})

export class ProfileComponent {
	user: any;

	constructor(private githubService: GithubService){
		githubService.getUser().subscribe(user => {
			this.user = user;
			console.log(user);
		})
	}
}