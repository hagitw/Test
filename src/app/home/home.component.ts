import { Root } from './../module/module';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  root: Root;

  constructor(public Service: AppService, public router: Router) { }
 
  ngOnInit() {}
  width:number=40;
  height:number=40;


  ClickO() {
    this.Service.GetRoot().subscribe(res => { this.root = res.json(); console.log(this.root.data.children); });
    console.log("click");
  }
  GetImg(i: number) {
    console.log(i + 'show pictuer');
    this.Service.ImgIndex = i;
    this.router.navigate(['./Picture/']);
  }
}