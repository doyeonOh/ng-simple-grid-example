import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { GridModule } from 'ng-simple-grid';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GridModule,
    AngularFireModule.initializeApp(environment.firebase, 'ng-simple-grid-example')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
