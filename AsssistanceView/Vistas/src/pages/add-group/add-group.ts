import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  public groupForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder // private groupsProvider: GroupsProvider
  ) {}

  ngOnInit() {
    this.groupForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  addGroup() {
    // this.groupsProvider.addGroup(this.todo.get("name").value)
    // this.groupsProvider.getGroupList();
    // this.navCtrl.pop();
  }
}
