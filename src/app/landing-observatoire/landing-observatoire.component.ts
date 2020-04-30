import { Component, OnInit } from '@angular/core';
import { RestProvider } from '../../providers/rest';
import { Title, Meta } from '@angular/platform-browser';
import {MatDialog, MatCheckboxModule, MatSlideToggleModule} from '@angular/material';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {MixPanelService} from '../services/mixpanel.service';

import { LandingObservatoireDialogComponent } from '../../modals/landing-observatoire-dialog/landing-observatoire-dialog.component';

import { isPlatformBrowser } from '@angular/common';
import {Router} from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { Gtag } from 'angular-gtag';

@Component({
  selector: 'app-landing-observatoire',
  templateUrl: './landing-observatoire.component.html',
  styleUrls: ['./landing-observatoire.component.scss']
})
export class LandingObservatoireComponent implements OnInit {

  landingDetails: any;
  name="observatoire";
  title: any;
  metaDescription: any;
  display = true;

  isSubmitted = false;
  contactForm: FormGroup;
  firstname: any;
  familyname: any;
  job: any;
  company:any;
  phone: any;
  email: any;
  isBrowser:any;
  link_PDFobservatoire= "https://asset.bondevisite.fr/Observatoire/pdf/HDInsights-2020.pdf"

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  phonePattern = '^0[1-78][0-9]{8}$';


  constructor(
    public dialog: MatDialog,
    public checkbox: MatCheckboxModule,
    public slidetoggle:MatSlideToggleModule,
    public titleService: Title,
    private router: Router,
    public meta : Meta,
    public restProvider: RestProvider,
    private fb: FormBuilder,
    private mixpanel: MixPanelService,
    private gtag: Gtag,

  ) {
    this.firstname = new FormControl('', Validators.required);
    this.familyname = new FormControl('', Validators.required);
    this.job = new FormControl('', Validators.required);
    this.company = new FormControl('', Validators.required);
    this.phone = new FormControl('', [Validators.required, Validators.pattern(this.phonePattern)]);
    this.email = new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]);

    this.contactForm = fb.group({
      firstname: this.firstname,
      familyname: this.familyname,
      job: this.job,
      company: this.company,
      phone: this.phone,
      email: this.email,
      page_url: this.router.url
    });



  }

  ngOnInit() {
    this.getLandingDetails();
    // this.dialog.open(LandingObservatoireDialogComponent, {
    //   height: 'fit-content',
    //   width: '600px'
    // });


  }

  closeUp(){
    this.display = !this.display;
    console.log('ok')
  }

  getLandingDetails() {
    this.restProvider.getLandingsDetails(this.name).subscribe(data => {
      this.landingDetails = data[0];

      //SEO PARAMETERS
      this.title = this.landingDetails.title;
      this.metaDescription = this.landingDetails.meta_description;
      this.titleService.setTitle(this.title);
      this.meta.addTags([
        {name: 'description', content: this.metaDescription},
        {name: 'author', content: 'Homadata'},
        {name: 'robots', content: 'index, follow'},

        //Twitter SEO Parameters
        // { name: 'twitter:card', content: 'summary_large_image' },
        // { name: 'twitter:site', content: '@homadata' },
        // { name: 'twitter:title', content: this.title },
        // { name: 'twitter:description', content: this.metaDescription },
        // { name: 'twitter:image', content: this.logoSocialMediaUrl },

        //Facebook SEO Parameters
        // { name: 'og:title', content: this.title },
        // { name: 'og:description', content: this.metaDescription },
        // { name: 'og:image', content: this.logoSocialMediaUrl }
      ]);
    });
  }

  save() {

    this.isSubmitted = true;
    if (this.contactForm.valid) {
      // this.restProvider.sendMailContact(this.contactForm.value).subscribe(data => {
      //   console.log('data', data);
      // });
      // this.mixpanel.eventTrack('contactFormObservatoire', this.contactForm.value);
      // this.gtag.event('contactFormObservatoire', this.contactForm.value);
      this.getPDFobservatoire()
    } else {
      console.log('serror');
    }
  }

  getPDFobservatoire() {
    window.open(
      this.link_PDFobservatoire
    );
  }
  openDialog() {
    const dialogRef = this.dialog.open(LandingObservatoireDialogComponent, {
      height: '700px',
      width: '870px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }


}
