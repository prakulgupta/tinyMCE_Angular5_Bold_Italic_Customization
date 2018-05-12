import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataSvc } from './data.service';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  imports: [BrowserModule, EditorModule],
  declarations: [AppComponent],
  providers: [DataSvc],
  bootstrap: [AppComponent]
})
export class AppModule { }
