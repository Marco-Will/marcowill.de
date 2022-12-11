import { Component, OnInit } from '@angular/core';

@Component(
{
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit 
{
  images = ['1.jpg','2.jpg','3.jpg'];
  currentImage = 0;
  showImage = true;

  //function that starts when open app
  ngOnInit()
  {
    this.updateImage() 
  }


  // a loop for changing pictures 
  updateImage() 
  {
    setInterval(() =>
    {
    this.currentImage++;
    this.currentImage = this.currentImage % this.images.length; // % = loop
    this.showImage = false;

    setTimeout(() => {
      this.showImage = true;
    }, 10);
    },8000)
  }
}
