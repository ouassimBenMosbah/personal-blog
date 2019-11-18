import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title: Observable<Data>;

  constructor(private router: ActivatedRoute) {
    this.title = this.router.data;
  }

  ngOnInit() {}
}
