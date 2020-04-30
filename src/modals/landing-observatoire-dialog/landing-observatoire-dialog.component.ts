import {Component, OnInit, Inject,ViewEncapsulation} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA, MatCheckboxModule, MatSlideToggleModule} from '@angular/material';

import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {RestProvider} from '../../providers/rest';
import {MixPanelService} from '../../app/services/mixpanel.service';
// import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';
import { Gtag } from 'angular-gtag';

@Component({
  selector: 'app-landing-observatoire-dialog',
  templateUrl: './landing-observatoire-dialog.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./landing-observatoire-dialog.component.scss']
})
export class LandingObservatoireDialogComponent implements OnInit {

  isSubmitted = false;
  contactForm: FormGroup;
  firstname: any;
  familyname: any;
  job: any;
  company:any;
  phone: any;
  email: any;
  isBrowser:any;
  link_PDFobservatoire= "https://design.bondevisite.fr/downloads/KitGraphique-v1.0.zip"

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  phonePattern = '^0[1-78][0-9]{8}$';

  constructor(
    public checkbox: MatCheckboxModule,
    public slidetoggle:MatSlideToggleModule,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<LandingObservatoireDialogComponent>,
    private router: Router,
    public restProvider: RestProvider,
    @Inject(MAT_DIALOG_DATA) data,
    private mixpanel: MixPanelService,
    private gtag: Gtag,

  ) {
    this.firstname = new FormControl('', Validators.required);
    this.familyname = new FormControl('', Validators.required);
    this.phone = new FormControl('', [Validators.required, Validators.pattern(this.phonePattern)]);
    this.email = new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]);


    this.contactForm = fb.group({
      firstname: this.firstname,
      name: this.familyname,
      phone: this.phone,
      email: this.email,
      page_url: this.router.url
    });

  }


  ngOnInit() {

  }

  save() {

    this.isSubmitted = true;
    if (this.contactForm.valid) {
      this.restProvider.sendMailContact(this.contactForm.value).subscribe(data => {
        console.log('data', data);
      });
      this.mixpanel.eventTrack('contactFormObservatoire', this.contactForm.value);
      this.gtag.event('contactFormObservatoire', this.contactForm.value);
      this.dialogRef.close(this.contactForm.value);
    } else {
      console.log('serror');
    }
  }

  getPDFobservatoire() {
    window.open(
      this.link_PDFobservatoire
    );

  }

}
