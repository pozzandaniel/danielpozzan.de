import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['laptop1.jpg', 'laptop2.jpg', 'turin.jpg'];
  texts = ['Bring engineering to the next level', 'Radical coder', 'Trained by Developer Akademie']
  currentImage = 0;
  showImage = true;

  ngOnInit(){
    this.updateImage();

  }

  updateImage(){
    setInterval(()=>{
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout(()=>{
        this.showImage = true;
      }, 10)
      
    }, 8000);
  }

}
