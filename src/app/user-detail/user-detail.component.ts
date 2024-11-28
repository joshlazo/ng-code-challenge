import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { catchError, map, take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { fadeInAnimation } from '../animations/fade-in.animation';

import { UserData } from 'src/model/user-data';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  animations: [fadeInAnimation]
})
export class UserDetailComponent {
  public readonly user$ = this.loadUser(Number(this.route.snapshot.paramMap.get('id')) ?? -1);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly userService: UserService,
  ) { }

  private loadUser(userId: number): Observable<UserData | null> {
    return this.userService.findOneById(userId).pipe(
      take(1),
      catchError((error) => {
        this.router.navigate(['/']);
        return of(null);
      })
    );
  }
}
