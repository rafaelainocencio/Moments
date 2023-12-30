import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: string = '';

  constructor() { }

  add(message: string) {
    this.message = message;

    setTimeout(() => {
     
    }, 4000);
  }

  clear() {
    this.message = '';
  }
}
