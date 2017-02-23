import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {WorkoutService} from '../../app/services/workout.service';
import {WorkoutDetailsPage} from './workoutdetails';

@Component({
    selector:'myworkouts',
    templateUrl:'myworkout.html',
    providers: [ WorkoutService ]
})
export class MyWorkoutsPage implements OnInit {
    
    workouts: any;

    constructor(public navBarCtrl: NavController, private service: WorkoutService ){

    }

    ngOnInit(){
        console.log('Calling Service to collect data from mlab.');
        this.service.getWorkoutData().subscribe(
            data => { 
                this.workouts = data 
                console.log('>>>>> ' + this.workouts[0].title);
            }
        );
    }

    // Life cycle hook method which will be called 
    // when page will be loaded due to redirect from other page.
    ionViewWillEnter() 
    {
        console.log( 'Life cycle hook - ionViewWillEnter is called !!! ' );
        this.service.getWorkoutData().subscribe( data => { this.workouts = data } );    
    }

    onClickOfWorkout(event, workout) {
        
        this.navBarCtrl.push( WorkoutDetailsPage, {
            workout: workout
        } );
    }
}


