import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from '../../router.service';
import { from, Subject, timestamp } from 'rxjs';
import { FormsModule, FormGroup, FormBuilder, Validators }   from '@angular/forms';
import { ContactService } from '../../contact.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

declare var VANTA: any;
@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup | undefined;
  private myForm: AngularFirestoreCollection<any>;
  private selfMail: AngularFirestoreCollection<any>;
  name: string = '';
  email: string = '';
  phone: string = '';
  subject: string = '';
  message: string = '';
  currentUrl: string='';
  constructor(public router: Router, public routerService: RouterService, public contactService: ContactService, public firestore: AngularFirestore){
    this.myForm=this.firestore.collection('enquiries');
    this.selfMail=this.firestore.collection('mail');
  }

  ngOnInit(){
    this.routerService.currentUrl=this.router.url;
    this.routerService.observeBackgroundColor();
    VANTA.NET({
      el: "#background",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 0.80,
      points: 15.00,
      spacing: 25.00,
      color: 0x00abf0,
      backgroundColor: 0x081b29,
      showDots: true
    })
    this.myForm=this.firestore.collection('enquiries');
    this.selfMail=this.firestore.collection('mail');
  }

  validate(): Boolean{
    const nameRegex = new RegExp( /^[a-zA-Z ]{2,30}$/);
    const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    const phoneRegex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);
    if(!nameRegex.test(this.name)){
      alert("Name Field is Invalid.");
      return false;
    }
    else if(!emailRegex.test(this.email)){
      alert("Email Field is Invalid.");
      return false;
    }
    else if(!phoneRegex.test(this.phone)){
      alert("Phone Number is Invalid.");
      return false;
    }
    else if(this.subject.length<=0){
      alert("Subject Field is empty.");
      return false;
    }
    else if(this.message.length<=0){
      alert("Message Field is empty.");
      return false;
    }
    else {
      return true;
    }
  }

  onSubmit(){
    if (this.validate()==true) {
      const contactData = {
        Name: this.name,
        Email: this.email,
        Phone: this.phone,
        Subject: this.subject,
        Message: this.message,
        Timestamp: new Date(),
      };
      this.myForm.add(contactData).then(() => {
        alert('Your message has been sent successfully!');
        this.sendEmail();
      }).catch(error => console.error('Error:', error));
    } 
  }

  sendEmail(){
    const emailData = {
      to: ["am1426620@gmail.com"],
      message: {
        subject: `New Form Submission from ${this.name}`,
        text: `A new form has been submitted on your website. Details:\nName: ${this.name}\nEmail: ${this.email}\nMobile: ${this.phone}\nMessage: ${this.message}`,
        html: `<!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Form Submission Notification</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            margin: 0;
                            padding: 0;
                        }
                        .container {
                            width: 100%;
                            max-width: 600px;
                            margin: 20px auto;
                            background: #ffffff;
                            padding: 20px;
                            border-radius: 8px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        }
                        .header {
                            background: #007bff;
                            color: #ffffff;
                            padding: 10px;
                            text-align: center;
                            font-size: 20px;
                            border-radius: 8px 8px 0 0;
                        }
                        .content {
                            padding: 20px;
                            line-height: 1.5;
                        }
                        .footer {
                            margin-top: 20px;
                            text-align: center;
                            font-size: 12px;
                            color: #555;
                        }
                        .info {
                            background: #f8f9fa;
                            padding: 10px;
                            border-radius: 5px;
                            margin-top: 10px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">New Form Submission</div>
                        <div class="content">
                            <p>Hello,</p>
                            <p>A new form has been submitted on your website. Details below:</p>
                            <div class="info">
                                <p><strong>Name:</strong> ${this.name}</p>
                                <p><strong>Email:</strong> ${this.email}</p>
                                <p><strong>Mobile:</strong> ${this.phone}</p>
                                <p><strong>Message:</strong> ${this.message}</p>
                            </div>
                            <p>Thank you.</p>
                        </div>
                        <div class="footer">
                            &copy; 2025 BuiltByAbhishek. All rights reserved.
                        </div>
                    </div>
                </body>
                </html>`,
        timestamp: new Date(),
      }
    };
    this.selfMail.add(emailData).then(() => {
      console.log('email queued successfully!');
      this.name = '';
      this.email = '';
      this.phone = '';
      this.subject = '';
      this.message = '';
    }).catch(error => console.error('Error:', error));
}
}
