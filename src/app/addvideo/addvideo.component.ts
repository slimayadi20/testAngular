import { Component, OnInit } from '@angular/core';
import { Video } from '../model/Video';
import { VideoServiceService } from '../Services/video-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddvideoComponent implements OnInit {
video!:Video; 
constructor(private svideo: VideoServiceService, private route: Router) {}
ngOnInit(): void {
  this.video = new Video();
}
ajoutervideo() {
  this.svideo.addVideo(this.video).subscribe(
    () => {
      this.route.navigate(['/video']);
    },
    (error) => {
      console.log(error);
    }
  );
}

}
