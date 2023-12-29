import { Component, ViewChild } from '@angular/core';
import { Contact } from './models/contacts.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-generate-contact',
  templateUrl: './generate-contact.component.html',
  styleUrl: './generate-contact.component.css',
})
export class GenerateContactComponent {
  contact!: Contact;
  tmpContact = new Contact();
  contacts: Contact[] = [];
  onSubmit() {
    this.contacts.push(this.tmpContact);
    this.contact = this.tmpContact;
    this.tmpContact = new Contact();
  }

  onFileUploadInputChange(event: Event) {
    let fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      var reader = new FileReader();
      reader.onloadend = () => {
        let baseString = reader.result?.toString();
        this.tmpContact.image = baseString;
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
  }
}
