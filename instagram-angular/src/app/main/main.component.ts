import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photo.component';
import { PhotoResponseModel } from '../models/photoResponseModel';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  apiUrl = "https://localhost:5001/api/photos/getall"
  constructor(private http: HttpClient) { }
  photos:Photo[] = []
  photoResponseModel:PhotoResponseModel={
    data : this.photos,
    message : "",
    success : true
  }
  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(){
    // gelen datayı buraya map et
    this.http
    .get<PhotoResponseModel>(this.apiUrl)
    .subscribe( res => {
        this.photoResponseModel = res
        console.log("bu bir res'tir ->", res);
      });

      console.log("id->",this.photos.find(x=>x.id));
      console.log("id->",this.photos);

    // var uri = "https://localhost:5001/api/photos/getall";
    // this.http.get(uri).subscribe( res => {
    //   console.log("bu bir res'tir ->", res);
    // });

  }

}
