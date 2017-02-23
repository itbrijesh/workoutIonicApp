import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {NavParams} from 'ionic-angular';
import {WorkoutService} from '../../app/services/workout.service';
import {MyWorkoutsPage} from './myworkout';

@Component({
    selector: 'workout-details',
    templateUrl: 'workoutdetails.html',
    providers: [WorkoutService]
})
export class WorkoutDetailsPage implements OnInit {

    public workout: any;
    result: any;

    constructor(private navBarCtrl: NavController, 
                private navBarParams: NavParams,
                private service: WorkoutService ) {
        
    }

    ngOnInit() {
        this.workout = this.navBarParams.get('workout');
    }

    deleteWorkout( id ) {

        console.log( 'On click method - deleteWorkout is called for ID : ' + id );

        this.service.deleteWorkoutData( id )
                    .subscribe( data => {
                        this.result = data;
                        console.log('Result >> ' + this.result );
                    } )
        
        this.navBarCtrl.push( MyWorkoutsPage );
    }
}

