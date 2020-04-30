import {Injectable} from '@angular/core';
import {Angulartics2Mixpanel} from 'angulartics2/mixpanel';
import {environment} from '../../environments/environment';

declare let mixpanel: any;

@Injectable()
export class MixPanelService {

  constructor(private mixpanelApp: Angulartics2Mixpanel) {
    mixpanel.init(environment.mixpanelKey);
  }

  track(id: string, data: any) {
    mixpanel.track(id, data);
  }

  eventTrack(id: string, data: any) {
    this.mixpanelApp.eventTrack(id, data);
  }

}
