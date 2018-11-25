import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

import { Group } from '../../data/group';
import { GroupsProvider } from '../../providers/groupsService/groupsService';

/**
 * Generated class for the AddAthletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-athlete',
  templateUrl: 'add-athlete.html'
})
export class AddAthletePage {
  public athleteForm: FormGroup;
  public groups$: Observable<Group[]>;
  groupId: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private groupsProvider: GroupsProvider // private athletesProvider: AthletesProvider
  ) {
    this.athleteForm = this.formBuilder.group({
      dni: ['', Validators.required],
      name: [''],
      group: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAthletePage');
  }

  showGroupAthletes(groupId) {
    return (this.groups$ = this.groupsProvider.getGroup(groupId));
  }

  logForm() {
    console.log(this.athleteForm.get('group').value);
  }

  addAthlete() {
    // let id = this.groupsProvider.getGroupByName(this.todo.get('group').value);
    // this.athletesProvider.addAthlete(
    //   this.todo.get('dni').value,
    //   this.todo.get('name').value,
    //   id
    // );
    // this.navCtrl.pop();
  }
}
