import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { GroupsProvider } from '../../providers/groupsService/groupsService';
import { Group } from '../../data/group';
import { AthletesProvider } from '../../providers/athleteService/athletesService'
import {AssistanceProvider} from "../../providers/assistancesService/assistanceService";
import {Schedule} from "../../data/schedule";
import {scheduleProvider} from "../../providers/scheduleService/scheduleService";

/**
 * Generated class for the AddAthletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-athlete',
  templateUrl: 'add-athlete.html',
})
export class AddAthletePage {

  private todo : FormGroup;
  private groups : Group[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, 
    private groupsProvider:GroupsProvider, private athletesProvider:AthletesProvider,
              private assistanceProvider: AssistanceProvider, private scheduleProvider: scheduleProvider ) {
    this.groups=this.groupsProvider.getGroupList();
    
    this.todo = this.formBuilder.group({
      dni: ['', Validators.required],
      name: ['',Validators.required],
      group: ['',Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAthletePage');
  }

  logForm(){
    console.log(this.todo.get("group").value)
  }

  addAthlete(){
    let id=this.groupsProvider.getGroupByName(this.todo.get("group").value);
    this.athletesProvider.addAthlete(this.todo.get("dni").value,this.todo.get("name").value,id);
    this.navCtrl.pop();
  }
}
