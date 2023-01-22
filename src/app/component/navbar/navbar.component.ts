import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavEventtService } from 'src/app/servies/nav-eventt.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItem: any = true;
  show: any = { display: 'block' };
  hide: any = { display: 'none' };

  constructor(private router: Router, private _navEvent: NavEventtService) { }

  public logout() {
    localStorage.removeItem('acessToken')
    this.router.navigateByUrl('/login')

  }
  ngOnInit(): void {
    this._navEvent.action.subscribe(resbonse => {
      this.menuItem = resbonse;
    })
  }

}
