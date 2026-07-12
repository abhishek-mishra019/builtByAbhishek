
import { inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  firestore: AngularFirestore;
  constructor() {
    this.firestore=inject(AngularFirestore);
  }

  addContact(contact: any) {
    return this.firestore.collection('enquiries').add(contact)
  }
}