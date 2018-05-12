
import { Component, ViewChild, Inject } from '@angular/core';
import { DataSvc } from './data.service';

declare var tinymce: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'Angular';
  protected dataSvc: DataSvc;

  constructor(@Inject(DataSvc) dataSvc: DataSvc) {
    this.dataSvc = dataSvc;
  }

  options = {
    plugins: 'link',
    selector: 'textarea',
    formats: {
      bold: { inline: 'b' },
      italic: { inline: 'i' }
    }
  }
}
