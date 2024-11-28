import { Component, OnInit } from '@angular/core';

import { slideIn } from '../animations/slide-in.animation';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  animations: [slideIn]
})
export class UsersListComponent {
  public readonly users$ = this.userService.getAll();

  constructor(private readonly userService: UserService) { }
}
