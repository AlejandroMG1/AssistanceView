import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupsProvider } from '../../providers/groupsService/groupsService';
import { GroupsViewPage } from '../groups-view/groups-view';

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
    private formBuilder: FormBuilder,
    private groupsProvider: GroupsProvider
  ) {}

  ngOnInit() {
    this.groupForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  addGroup() {
    if(this.groupForm.invalid){
      return;
    }
     this.groupsProvider.addGroup(this.groupForm.value.name).subscribe(id => {
        
      this.navCtrl.setRoot(GroupsViewPage);
     });

  }
}
