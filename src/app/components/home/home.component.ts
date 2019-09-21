import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/services/portfolio.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
recentProjects: Portfolio[];
  constructor(private serviceholder: PortfolioService ) { }

  ngOnInit() {
    this.serviceholder.get().subscribe(data=>{
      this.recentProjects = data.splice(0,7);
    })
  }

}
