import { Injectable } from '@angular/core';

@Injectable()

export class B64Service {

  encode (s:string)  {
    return btoa(encodeURI(s));
  }

  decode (s:string) {
    return decodeURI(atob(s));
  }

  encodeInput (input : any) {
    try {
      let text = '';
      for (let key of  Object.keys(input)) {
        text += input[key] + '+';
      }
      text = text.substring(0, text.length - 1);
      let arg:string = this.encode(text);
      return arg;
    } catch (err) {
      return '';
    }
  }

  decodeInput (arg:string) {
    try {
      arg = this.decode(arg);
      if (arg.indexOf('+') == -1) return;
      let argArr:string[] = arg.split('+');
      return argArr;
    } catch (err) {
      return [];
    }
  }

  encodeInputQuery (query: any) {
    try {
      let text = '';
      for (let key of  Object.keys(query)) {
        text += key + '=' + query[key] + '&';
      }
      text = text.substring(0, text.length - 1);
      let arg:string = this.encode(text);
      return arg;
    } catch (err) {
      return '';
    }
  }

  decodeInputQuery (arg: string) {
    try {
      arg = this.decode(arg);
      let argArr: string[] = arg.split('&');
      let query: any = {};
      for (let argItem of argArr ) {
        let pair:string[] = argItem.split('=');
        query[pair[0]] = pair[1];
      }
      return query;
    } catch (err) {
      return false;
    }
  }

}
