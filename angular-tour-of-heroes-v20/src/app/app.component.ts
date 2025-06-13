import { Component } from '@angular/core';
import { MessagesComponent } from "./messages/messages.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink, MessagesComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
}
