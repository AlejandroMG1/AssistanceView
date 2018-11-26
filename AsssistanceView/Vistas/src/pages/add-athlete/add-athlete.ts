import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController} from 'ionic-angular';
import { Observable } from 'rxjs';

import { Group } from '../../data/group';
import { GroupsProvider } from '../../providers/groupsService/groupsService';
import { AthletesProvider } from '../../providers/athleteService/athletesService';
import { Athlete } from '../../data/athlete';
import { format } from 'date-fns';
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

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private groupsProvider: GroupsProvider,
    private athletesProvider: AthletesProvider
  ) {
    
  }

  ngOnInit() {
    this.athleteForm = this.formBuilder.group({
      idAthlete: ['', Validators.required],
      name: [''],
      idGroup: ['']
    });
    this.groups$ = this.groupsProvider.getGroupList();  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAthletePage');
  }

  showGroupAthletes(groupId) {
    return (this.groups$ = this.groupsProvider.getGroup(groupId));
  }


  addAthlete() {
    // let id = this.groupsProvider.getGroupByName(this.todo.get('group').value);
    // this.athletesProvider.addAthlete(
    //   this.todo.get('dni').value,
    //   this.todo.get('name').value,
    //   id
    // );
    
    if(this.athleteForm.invalid){
      return;
    }
    const athlete: Athlete = {
      ...this.athleteForm.value,
      date: format(new Date(), 'DD MMM YYYY'),

    };
    this.athletesProvider.addAthlete(athlete).subscribe(id => {
      console.log("Atleta creado con código: ",id)
      this.navCtrl.pop();
    });
  }
  

}
