import {Injectable} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

import {environment} from '../environments/environment';
import {ScreenService} from '../app/services/screen.service';


@Injectable()
export class RestProvider {
  apiUrl = environment.apiUrl;
  addressesUrl = environment.apiAddressUrl;
  backendUrl = environment.apibackendUrl;
  usersUrl = environment.apiUsersUrl;
  headerOptions: any;
  headerAddresses: any;
  headerBackend: any;
  headerUser: any;

  // users: any;

  constructor(
    private http: HttpClient,
    private screenService: ScreenService,
  ) {
    if (screenService.getIsBrowser()) {
      this.setHeaders();
    }

  }

  getArticles() {
    return this.http.get(this.apiUrl + '/articles', this.headerOptions);
  }

  getNews() {
    return this.http.get(this.apiUrl + '/news', this.headerOptions);
  }

  getTestimonials() {
    return this.http.get(this.apiUrl + '/testimonials', this.headerOptions);
  }

  getJobs() {
    return this.http.get(this.apiUrl + '/jobs', this.headerOptions);
  }

  getSelectedJob(id) {
    return this.http.get(this.apiUrl + '/jobs/' + id, this.headerOptions);
  }

  getAllLandingsDetails() {
    return this.http.get(this.apiUrl + '/landings', this.headerOptions);
  }

  getAllPress() {
    return this.http.get(this.apiUrl + '/presses', this.headerOptions);
  }

  getAllPressReleases() {
    return this.http.get(this.apiUrl + '/pressreleases', this.headerOptions);
  }

  getLandingsDetails(name) {
    return this.http.get(this.apiUrl + '/landings?name_contains=' + name, this.headerOptions);
  }

  getPricingDetails(name) {
    return this.http.get(this.apiUrl + '/pricings?name_contains=' + name, this.headerOptions);
  }

  getMiscDetails(name) {
    return this.http.get(this.apiUrl + '/miscs?name_contains=' + name, this.headerOptions);
  }

  getSelectedArticle(url) {
    return this.http.get(this.apiUrl + '/articles/url/' + url, this.headerOptions);
  }

  getFaqsByCategory(cat) {
    return this.http.get(this.apiUrl + '/faqs?faqcategories.categorie=' + cat, this.headerOptions);
  }

  getFaqsByKeyword(keyword) {
    return this.http.get(this.apiUrl + '/faqs?faq_content_contains=' + keyword, this.headerOptions);
  }

  getSelectedFaq(url) {
    return this.http.get(this.apiUrl + '/faqs?url=' + url, this.headerOptions);
  }

  getInseeCode(postalCode) {
    return this.http.get(this.addressesUrl + '/cities?postalCode=' + postalCode, this.headerAddresses).map(
      data => {
        return data;
      },
      err => {
        return err;
      }
    );
  }

  getStaticPageDetails(insee) {
    return this.http.get(this.backendUrl + '/city/static/pages?inseeCode=' + insee, this.headerBackend).map(
      data => {
        return data;
      },
      err => {
        return err;
      }
    );
  }

  sendMailContact(data) {
    return this.http.post(this.usersUrl + '/emails/contact', data, this.headerUser);
  }

  private setHeaders() {

    const adminHeaders = new HttpHeaders({
      //'Authorization': 'Bearer ' + environment.strapiKey
    });
    const AddressesHeaders = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(environment.apiAddressCredentials[0] + ':' + environment.apiAddressCredentials[1])
    });
    const headerBackend = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(environment.apibackendCredentials[0] + ':' + environment.apibackendCredentials[1])
    });

    const headerUser = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(environment.apiUsersCredentials[0] + ':' + environment.apiUsersCredentials[1])
    });

    this.headerOptions = {headers: adminHeaders};
    this.headerAddresses = {headers: AddressesHeaders};
    this.headerBackend = {headers: headerBackend};
    this.headerUser = {headers: headerUser};

  }
}
