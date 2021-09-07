import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../models/message";

@Component({
  selector: 'app-recieved-message',
  templateUrl: './recieved-message.component.html',
  styleUrls: ['./recieved-message.component.css']
})
export class RecievedMessageComponent implements OnInit {
  @Input() message: Message;
  constructor() { }

  ngOnInit(): void {
  }

}
