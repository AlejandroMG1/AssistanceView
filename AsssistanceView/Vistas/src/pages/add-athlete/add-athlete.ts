import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { GroupsProvider } from '../../providers/groupsService/groupsService';
import { Group } from '../../data/group';
import { AthletesProvider } from '../../providers/athleteService/athletesService'

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private groupsProvider:GroupsProvider) {
    this.groups=this.groupsProvider.getGroupList();
    
    this.todo = this.formBuilder.group({
      dni: ['', Validators.required],
      name: [''],
      group: [''],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAthletePage');
  }

  logForm(){
    console.log(this.todo.value)
  }
}
