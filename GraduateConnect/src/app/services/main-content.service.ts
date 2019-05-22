    import { Injectable } from '@angular/core';
     
    @Injectable({
      providedIn: 'root',
    })
    export class MainContentService {

      id: number;
      name: string;
      dominant1: number = 1;
      convincing1: number = 1;
      earth1: number = 1;
      precise1: number = 1;
      accomodate1: number = 1;
      introver1: number = 1;
      animated1: number = 1;
      headstrong1: number = 1;
      dominant: number=0;
      convincing: number = 0;
      earth: number = 0;
      precise: number = 0;
      accomodate: number = 0;
      introvert: number = 0;
      animated: number = 0;
      headstrong: number = 0;
      sum: number = 0;

      messages: string[] = [];
     
      add(message: string) {
        this.messages.push(message);
      }
     
      clear() {
        this.messages = [];
      }

    }