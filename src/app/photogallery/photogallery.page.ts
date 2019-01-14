import { Component, OnInit } from '@angular/core';
import { Griddata } from './photogallery';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PhotoViewer  } from '@ionic-native/photo-viewer/ngx';


@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.page.html',
  styleUrls: ['./photogallery.page.scss'],
})
export class PhotogalleryPage implements OnInit {
  ImageGallery = Griddata[0].UserRelated;
  photo: any;
  constructor(private camera: Camera, private photoViewer: PhotoViewer) { }

  ngOnInit() {
  }
  CaptureImage() {
    const options: CameraOptions = {
      quality: 75,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.photo = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });

  }
  show(event) {
    console.log(event);
     this.photoViewer.show(event);
     // this.photoViewer.show('https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png');
      }


}
