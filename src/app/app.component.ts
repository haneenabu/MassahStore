import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Massah Collection';
  time = new Observable<string>((observer) => {
    setInterval(()=> observer.next(new Date().toString()), 1000);
  });
}
