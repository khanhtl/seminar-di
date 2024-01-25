class RecruitmentService {
  getPaging() {
    console.log('Get Paging');
  }
}

class RecruitmentComponent {
  constructor(public recruitmentSV: RecruitmentService) {

  }
}

// Angualr DI

class Injector {
  private _containers=new Map();
  constructor(private _providers: any[] = []) {
    this._providers.forEach(service => {
      this._containers.set(service, new service());
    });
  }
  get(service: any) {
    const serviceInstance=this._containers.get(service);
    if (!serviceInstance) {
      throw new Error('No Provider Found');
    }
    return serviceInstance;
  }
}

const injector=new Injector([RecruitmentService]);
const component=new RecruitmentComponent(injector.get(RecruitmentService));
component.recruitmentSV.getPaging();
