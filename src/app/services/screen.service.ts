import {HostListener, Injectable, Inject} from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';

import { isPlatformBrowser } from '@angular/common';

import { PLATFORM_ID } from '@angular/core';


@Injectable()
export class ScreenService {

  isBrowser;

  public innerWidth: any;
  public isMobile: boolean = false;
  public isTablet: boolean = false;
  public isDesktop: boolean = true;


  ngOnInit() {
  }


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.getSize();
    } else {
    }
  }

  getIsBrowser() {
    return this.isBrowser;
  }

  getSize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 768) {
      // console.log('Its a mobile device');
      this.isMobile = true;
      this.isTablet = false;
      this.isDesktop = false;

    } else if (this.innerWidth > 768 && this.innerWidth <= 992) {
      // console.log('Its a tablet device');
      this.isMobile = false;
      this.isTablet = true;
      this.isDesktop = false;
    } else {
      // console.log('Its a desktop device');
      this.isMobile = false;
      this.isTablet = false;
      this.isDesktop = true;
    }
  }


}
