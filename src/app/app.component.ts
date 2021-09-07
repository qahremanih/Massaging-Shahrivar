import {Component} from '@angular/core';
import {ContactService} from "./services/contact.service";
import {Contact} from "./models/contact";
import {Notification} from './models/notification';
import {Message} from "./models/message";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedContact: Contact;
  contacts: Contact[];
  notification: Notification;
  defaultSelectedContact: Contact;
  activeTab: string = 'sms';
  message: string = '';


  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.getContacts();
    this.defaultSelectedContact = this.contacts[0];
    // this.defaultSelectedContact.messages.push(...this.defaultSelectedContact.messages)
    // this.defaultSelectedContact.messages.push(...this.defaultSelectedContact.messages)
    setInterval(()=> {
      this.contactService.onReceiveNewMessage(3, {
        id: 1415,
        text: 'Made any progress so far?',
        date: '12:28 AM',
        isFirstMessageInGroup: true,
        isLastMessageInGroup: true,
        isSender: true,
        isOpened: false,
      })
      this.getNotification();
      setTimeout(()=>{
        this.notification = null;
      },5000)
    }, 30000);
  }

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
    this.contactService.onSelectContact(contact);
    this.activeTab = 'chat-box';
  }
  onSendMessage(message: Message): void{
    if (!this.selectedContact){
      this.contactService.addMessage(message, this.defaultSelectedContact);
    }else {
      this.contactService.addMessage(message, this.selectedContact);
    }
    this.message = '';
  }

  onClickSmsIcon($event: any){
    this.activeTab = 'sms';
  }

  onClickSearchIcon($event: any){
    this.activeTab = 'search'
  }
  getContacts(): void {
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }
  getNotification(): void {
    this.contactService.getNotification()
      .subscribe(notification => this.notification = notification);
  }

}
