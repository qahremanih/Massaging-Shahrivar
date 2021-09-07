import {Component, Input} from '@angular/core';
import {Contact} from "../models/contact";

@Component({
  selector: 'app-chat-box',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent {
  @Input() selectedContact: Contact;
  @Input() defaultSelectedContact: Contact;
}
