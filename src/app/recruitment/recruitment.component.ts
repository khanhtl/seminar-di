import { AppConfig } from './../AppConfig';
import { RecruitmentV2Service } from './../recruitment-v2.service';
import { Component, inject } from '@angular/core';
import { RecruitmentService } from '../recruitment.service';
import { BROWSER_STORAGE, BrowserStorageService } from '../storage.service';

@Component({
  selector: 'app-recruitment',
  standalone: true,
  imports: [],
  templateUrl: './recruitment.component.html',
  styleUrl: './recruitment.component.css',
  providers: [
    // {
    //   provide: RecruitmentService,
    //   // useClass: RecruitmentV2Service,

    //   // useExisting: RecruitmentV2Service,

    //   // useFactory: () => {
    //   //   return AppConfig.isUseV2 ? new RecruitmentV2Service(): new RecruitmentService()
    //   // },

    //   // useValue: {
    //   //   getPaging() {
    //   //     console.log('Use Value Get Paging');
    //   //   }
    //   // }
    // }
    {
      provide: BROWSER_STORAGE,
      useFactory: () => sessionStorage
    },
    BrowserStorageService
  ]
})
export class RecruitmentComponent {
  #recruitmentSV1=inject(RecruitmentService);
  // #recruitmentSV2=inject(RecruitmentV2Service);

  constructor(private _storageService: BrowserStorageService) {
    // console.log(`Cùng 1 instance: ${this.#recruitmentSV1 === this.#recruitmentSV2}`);
    this.#recruitmentSV1.getPaging();
  }

  showStorage() {
    this._storageService.storage.setItem('FullName', 'Tạ Long Khánh')
  }
}
