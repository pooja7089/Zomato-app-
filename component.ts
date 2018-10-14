// this  is by default Statement
import { Component }  from '@angular/core';

// decorator
@Component({
selector: 'app-root',
templateUrl: './zomato.html',
stylesUrls: ['./app.css']  //stylesheet
})


// a simple class
export class   titleComponent {

 onCategorySelected = {}
 title = 'app-works!';
 //api of zomato developer
 private apiUrl ='https://c947529d08fc936e51a9812d604693';
 data: any = {};

//this is active class of string
public activeClass: string = "active"

private categories: any[] = [
{ "Id": 6, "Name": "Cafe" },
{ "Id": 7, "Name": "Breakfast" },
{ "Id": 8, "Name": "lunch" },
{ "Id": 9, "Name": "Dinner" },
{ "Id":10, "Name": "Pub or bar" }

];//declare categories id and name

constructor() {}

onClick(category:any){
    this.activeClass ="active";
    this.onCategorySelected;
    (<number>category.Id);
} 
} //end constructor



