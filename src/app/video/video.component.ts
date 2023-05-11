import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from '../Services/video-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  

  constructor(private vservice : VideoServiceService,private route:Router) { }
video : any ; 
  ngOnInit(): void {
    this.getvideo();
  }
  getvideo(){
    this.vservice.getVideos().subscribe(
      (data)=>{
        this.video = data;
        console.log(data);
      }
    )
  }

}
