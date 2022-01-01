import { Component, OnInit } from '@angular/core';
//import * as fs from 'fs';
//import * as path from 'path';

@Component({
  selector: 'app-root',
  templateUrl: './flexgrid1.component.html',
  styleUrls: ['./flexgrid1.component.css']
})
export class Flexgrid1Component implements OnInit {
  public cardList: String[] = [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
     ];
  //public cardList: CardInterface[] = [];
  constructor() { }
  ngOnInit(): void {
  //this.cardList.push
  /*
  this.cardList.push({imgSrc: 'A'});
  this.cardList.push({imgSrc: 'B'});
  this.cardList.push({imgSrc: 'C'});
  */
    //const fs = require('file-system');
    const st = "C:/Users/finns/Pictures/2021-05-06 Vores fest";
    //fs.writeFile('test.txt', 'aaa', function(err:any) {})
    /*
    const files = fs.readdirSync(st);
    console.log(files);
    console.log("ALT OK");
    */
    /*
    fs.readdir(st, function(err :any, data :any){
    	if(err) throw err
      	console.log(data)
    });
    */
/*

    fs.readdir(st, function (err, files) {
        // "files" is an Array with files names
              //files: String[] = [];
              console.log(files);
    });
*/
   }
 }

 export interface CardInterface {
   imgSrc: string;
   title: string;
   description: string;
 }

