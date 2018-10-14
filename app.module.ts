//this is platform-browser
import { BrowserModule } from '@angular/platform-browser';
import {NgModule}  from '@angular/core';
//ngModule
import { AppComponent } from '@angular/AppComponent';
import {FormsModule} from '@angular/forms' ;

//routing
import { RouterModule,router } from '@angular/router' ; 

//decorators
@NgModule({
    declarations: [
        AppComponent,
    ], //declare the appComponent

    imports: [
        BrowserModule,
        //to declare the possible routes in application
        FormsModule,
        //routerModule forRoot method to declare the possible routes in application
        RouterModule.forRoot,
        this.newMethod() 
    ],
    providers:[],
    bootstrap:[AppComponent] //provides the AppComponent in bootstrap
})

// empty object
export class AppModule{ 

}


