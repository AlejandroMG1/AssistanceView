import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GroupsProvider } from '../../providers/groupsService/groupsService';

/**
 * Generated class for the AddGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-group',
  templateUrl: 'add-group.html'
})
export class AddGroupPage {
  private todo: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private groupsProvider: GroupsProvider
  ) {
    this.todo = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  /* addGroup(){
    this.groupsProvider.addGroup(this.todo.get("name").value)
    this.groupsProvider.getGroupList();
    this.navCtrl.pop();
  } */

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddGroupPage');
  }
}
