import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecruitmentV2Service {
  constructor() { }
  prefix = 'RecruitmentService V2'
  getPaging() {
    console.log(`${this.prefix}: Get Paging Recruitment`);
  }
}
