import { Component, OnInit, ViewChild } from '@angular/core';
import { Grid } from '@syncfusion/ej2-grids';
import { Http, ResponseType } from '@angular/http';
import {map, tap} from 'rxjs/operators';
import { config } from 'rxjs';

@Component({
  selector: 'app-root',
  template: '<ejs-grid  #grid [dataSource]="data" dataBound=\'dataBound()\' height="100%" width="100%"><e-columns><e-column field="ClientPayeur" headerText="ClientPayeur" textAlign="Right" width="120"></e-column><e-column field="CodeClient" headerText="CodeClient" width="150"></e-column><e-column field="CodeTiers" headerText="CodeTiers" textAlign="Right" width="120"></e-column><e-column field="NV1" headerText="NV1" width="150"></e-column><e-column field="DateFacture" headerText="DateFacture" width="150"></e-column><e-column field="DateEcheance" headerText="DateEcheance" width="150"></e-column><e-column field="Type" headerText="Type" textAlign="Right" width="120"></e-column><e-column field="Activite" headerText="Activite" textAlign="Right" width="120"></e-column> <e-column field="ModeReglement" headerText="ModeReglement" textAlign="Right" width="120"></e-column> <e-column field="TTC" headerText="TTC" textAlign="Right" width="120"></e-column> <e-column field="MontantDU" headerText="MontantDU" textAlign="Right" width="120"></e-column> <e-column field="Teletransmissible" headerText="Teletransmissible" textAlign="Right" width="120"></e-column> <e-column field="DURO" headerText="DURO" textAlign="Right" width="120"></e-column> <e-column field="PARTRO" headerText="PARTRO" textAlign="Right" width="120"></e-column> <e-column field="EtatT" headerText="EtatT" textAlign="Right" width="120"></e-column> <e-column field="DURC" headerText="DURC" textAlign="Right" width="120"></e-column> <e-column field="PARTRC" headerText="PARTRC" textAlign="Right" width="120"></e-column> <e-column field="EtatT2" headerText="EtatT2" textAlign="Right" width="120"></e-column> <e-column field="DuClient" headerText="DuClient" textAlign="Right" width="120"></e-column> <e-column field="PartClient" headerText="PartClient" textAlign="Right" width="120"></e-column> <e-column field="Ets2" headerText="Ets2" textAlign="Right" width="120"></e-column> <e-column field="ClientLivree" headerText="ClientLivree" textAlign="Right" width="120"></e-column> <e-column field="App" headerText="App" textAlign="Right" width="120"></e-column> <e-column field="AgentCommercial" headerText="AgentCommercial" textAlign="Right" width="120"></e-column> <e-column field="AutreCritere" headerText="AutreCritere" textAlign="Right" width="120"></e-column> <e-column field="DebLoc1ereLigne" headerText="DebLoc1ereLigne" textAlign="Right" width="120"></e-column> <e-column field="FinLoc1ereLigne" headerText="FinLoc1ereLigne" textAlign="Right" width="120"></e-column> <e-column field="OrgAMO" headerText="OrgAMO" textAlign="Right" width="120"></e-column> <e-column field="OrgAMC" headerText="OrgAMC" textAlign="Right" width="120"></e-column> <e-column field="PremRelanceClient" headerText="PremRelanceClient" textAlign="Right" width="120"></e-column> <e-column field="DeuxRelanceClient" headerText="DeuxRelanceClient" textAlign="Right" width="120"></e-column> <e-column field="TroixRelanceClient" headerText="TroixRelanceClient" textAlign="Right" width="120"></e-column> <e-column field="PremRelanceAMO" headerText="PremRelanceAMO" textAlign="Right" width="120"></e-column> <e-column field="DeuxRelanceAMO" headerText="DeuxRelanceAMO" textAlign="Right" width="120"></e-column> <e-column field="TroixRelanceAMO" headerText="TroixRelanceAMO" textAlign="Right" width="120"></e-column> <e-column field="PremRelanceAMC" headerText="PremRelanceAMC" textAlign="Right" width="120"></e-column> <e-column field="DeuxRelanceAMC" headerText="DeuxRelanceAMC" textAlign="Right" width="120"></e-column> <e-column field="TroixRelanceAMC" headerText="TroixRelanceAMC" textAlign="Right" width="120"></e-column> <e-column field="MttReglee" headerText="MttReglee" textAlign="Right" width="120"></e-column> <e-column field="DatederReglement" headerText="DatederReglement" textAlign="Right" width="120"></e-column> <e-column field="DelaiReglement" headerText="DelaiReglement" textAlign="Right" width="120"></e-column> <e-column field="DepassEcheance" headerText="DepassEcheance" textAlign="Right" width="120"></e-column> </e-columns></ejs-grid>',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private apiUrl='https://joke-api-strict-cors.appspot.com/jokes/random';
  testdata:any={};

  constructor(private http:Http)
  {
    console.log('Hello Fellow User');
    this.getData();
  }
  getData() {
    return console.log(this.http.get(this.apiUrl));
  
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  
  @ViewChild('grid',{static:false})
    public grid: Grid;

  title = 'my-grid-app';
  public data: object[]=[
    {
      ClientPayeur:"SIMON-LYDIA",
      CodeClient:"713500",
      CodeTiers:"4713500",
      NV1:"68122226",
      DateFacture:"6/30/2019",
      DateEcheance:"6/30/2019",
      Type:"LO2ORG-Location O2 organisme",
      Activite:"O2-Oxygenotherapie",
      ModeReglement:"3-Virement EUROS",
      TTC:"20",
      MontantDU:"8",
      Teletransmissible:"OUI",
      DURO:"0",
      PARTRO:3,
      EtatT:"ACC",
      DURC:"1003",
      PARTRC:"12",
      EtatT2:"0",
      DuClient:"10",
      PartClient:"100",
      Ets2:"",
      ClientLivree:"Tony",
      App:"",
      AgentCommercial:"TONY",
      AutreCritere:"",
      DebLoc1ereLigne:"",
      FinLoc1ereLigne:"",
      OrgAMO:"AMO1",
      OrgAMC:"AMC2",
      PremRelanceClient:"",
      DeuxRelanceClient:"",
      TroixRelanceClient:"",
      PremRelanceAMO:"",
      DeuxRelanceAMO:"",
      TroixRelanceAMO:"",
      PremRelanceAMC:"",
      DeuxRelanceAMC:"",
      TroixRelanceAMC:"",
      MttReglee:"",
      DatederReglement:"",
      DelaiReglement:"",
      DepassEcheance:"",
    },
    {
      ClientPayeur:"Khpury",
      CodeClient:"AAA",
      CodeTiers:"$123",
      NV1:"China",
      DateFacture:"CCC Ltd",
      DateEcheance:"20%",
      Type:2,
      Activite:"ABB",
      ModeReglement:"$133",
      TTC:"Japan",
      MontantDU:"CCA Ltd",
      DURO:"10%",
      PARTRO:3,
      EtatT:"ACC",
      DURC:"$1003",
      PARTRC:"Lebanon",
      EtatT2:"Soft Inc",
      DuClient:"10%",
      PartClient:"",
      Ets2:"",
      ClientLivree:"",
      App:"",
      AgentCommercial:"",
      AutreCritere:"",
      DebLoc1ereLigne:"",
      FinLoc1ereLigne:"",
      OrgAMO:"",
      OrgAMC:"",
      PremRelanceClient:"",
      DeuxRelanceClient:"",
      TroixRelanceClient:"",
      PremRelanceAMO:"",
      DeuxRelanceAMO:"",
      TroixRelanceAMO:"",
      PremRelanceAMC:"",
      DeuxRelanceAMC:"",
      TroixRelanceAMC:"",
      MttReglee:"",
      DatederReglement:"",
      DelaiReglement:"",
      DepassEcheance:"",
    }
  ]
  dataBound() {
    this.grid.autoFitColumns();
}
}

