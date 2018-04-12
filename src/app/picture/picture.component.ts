import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
ImgIndex;number;
  constructor(public service:AppService) { this.ImgIndex=this.service.ImgIndex;}
  arrImage: any[] = ["http://thecatapi.com/api/images/get?image_id=811",
    "http://thecatapi.com/api/images/get?image_id=811",
    "http://thecatapi.com/api/images/get?image_id=811",
    "http://thecatapi.com/api/images/get?image_id=811",
    "http://thecatapi.com/api/images/get?image_id=811",
    "http://thecatapi.com/api/images/get?image_id=811",
    "http://thecatapi.com/api/images/get?image_id=811",
    "http://thecatapi.com/api/images/get?image_id=811",
  ]
  ngOnInit() {
  }
SwitchImg(i:number)
{
  console.log(i);
this.ImgIndex=i;
}
}
