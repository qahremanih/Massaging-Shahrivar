import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../models/contact";

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  @Input() selectedContact: Contact;
  @Input() defaultSelectedContact: Contact;

  constructor() { }

  ngOnInit() {
  }
}
