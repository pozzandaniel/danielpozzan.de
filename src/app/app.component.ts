import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

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
