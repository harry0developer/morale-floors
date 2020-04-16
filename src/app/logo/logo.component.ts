import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  open = false;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  toggle() {
    this.open = !this.open;
    this.dataService.statusSubject.next(this.open);
  }

}
