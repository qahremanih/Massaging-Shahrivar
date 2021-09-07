import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { SentMessageComponent } from './sent-message/sent-message.component';
import { RecievedMessageComponent } from './recieved-message/recieved-message.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { NotificationToastComponent } from './notification-toast/notification-toast.component';
import { HeaderTabsComponent } from './header-tabs/header-tabs.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { AddFormInputComponent } from './add-form-input/add-form-input.component';
import { StartsWithPipe } from './services/customstart.pipe';
import { SummaryPipe } from './summary.pipe';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ChatboxComponent,
    SentMessageComponent,
    RecievedMessageComponent,
    ProfileHeaderComponent,
    NotificationToastComponent,
    HeaderTabsComponent,
    ContactListComponent,
    ContactItemComponent,
    AddFormInputComponent,
    StartsWithPipe,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
