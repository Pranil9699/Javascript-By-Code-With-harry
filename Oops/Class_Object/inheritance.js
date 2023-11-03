class RailwayForm {
  submit() {
    return `${this.person} Has Submitted Form For ${this.trainNo}  TrainNo`;
  }
  cancel() {
    this.person = null;
    this.trainNo = null;
  }
  constructor(person, trainNo) {
    this.trainNo = trainNo;
    this.person = person;
    console.log(" the RailwayForm Constructor Called");
  }
}
class MetroRailwayForm extends RailwayForm {
  constructor(person, trainNo, sStation, eStation) {
    super(person, trainNo);
    this.sStation = sStation;
    this.eStation = eStation;
    console.log(" the MetroRailwayForm Constructor Called");
  }
  //   Submit() {
  //     console.log(
  //       super.person +
  //         " Has Submitted Form For " +
  //         super.trainNo +
  //         " Train\n From : " +
  //         this.sStation +
  //         " And End : " +
  //         this.eStation
  //     );
  //   }
  Submit() {
    console.log(`${super.submit()}  Train\n From :${this.sStation} And End :${this.eStation}`);
  }
  Cancel() {
    console.log("Form MetroRailwayForm Is Cancelled..");
    this.sStation = this.eStation = null;
    super.cancel();
  }
}
let PranilMetroRF = new MetroRailwayForm("Pranil", 123456, "Pune", "Mumbai");
PranilMetroRF.Submit();
PranilMetroRF.Cancel();


// if you not creating the constustor in drived class then compiler auto. ly created the empty construtor with super(); in derived class
// incase you created the constructor but not write super() then it shows error console