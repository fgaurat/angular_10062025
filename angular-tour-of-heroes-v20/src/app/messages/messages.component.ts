import { Component, inject } from '@angular/core';
import { MessageService } from '../message.service';


@Component({
    selector: 'app-messages',
    imports: [],
    templateUrl: './messages.component.html',
    styleUrl: './messages.component.css'
})
export class MessagesComponent {
  messageService:MessageService = inject(MessageService)



}
