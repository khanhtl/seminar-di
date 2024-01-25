import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecruitmentService {

  constructor() { }
  prefix = 'RecruitmentService'
  getPaging() {
    console.log(`${this.prefix}: Get Paging Recruitment`);
  }
}
