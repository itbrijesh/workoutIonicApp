import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WorkoutService } from '../../app/services/workout.service';
import { MyWorkoutsPage } from '../myworkout/myworkout';

@Component({
    selector: 'add-workout',
    templateUrl: 'addworkout.html',
    providers: [WorkoutService]
})
export class AddWorkoutPage {
    
    title: string;
    type: string;
    note: string;
    result: any;

    constructor( public navCtrl: NavController, public service: WorkoutService )
    {

    }

    OnSubmitOfAddWorkout() {

        console.log('OnSubmitOfAddWorkout is called...');

        var workout = {
            title: this.title,
            note: this.note,
            type: this.type
        }

        this.service.addWorkoutData( workout )
                    .subscribe( data => { 
                        this.result = data ;
                        // Redirect to ...
                        this.navCtrl.push( MyWorkoutsPage );
                        } 
                    );
    }
}

