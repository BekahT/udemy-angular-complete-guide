export class CounterService {
  movedInactive: number = 0;
  movedActive: number = 0;

  incrementInactive(){
    this.movedInactive++;
    console.log("Accounts moved from Active to Inactive: " + this.movedInactive);
  }

  incrementActive() {
    this.movedActive++;
    console.log("Accounts moved from Inactive to Active: " + this.movedActive);
  }
}