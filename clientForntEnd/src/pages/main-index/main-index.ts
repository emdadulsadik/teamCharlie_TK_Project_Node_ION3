import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';


@Component({
  selector: 'page-main-index',
  templateUrl: 'main-index.html',
})
export class MainIndexPage {
 
 @ViewChild(Slides) slides: Slides;
	
	imgagesSlides=[
								
				{
					name:'User Management',
					description:`User Management is an authentication feature that provides 
								 administrators with the ability to identify and control the 
								 state of users logged into their profile`,
					image: 'assets/imgs/sliding-Images/user.png' 
				},
				{
					name:'Timeline',
					description:`Your timeline in Google Maps helps you find the 
								 places you've been and the routes you've traveled. `,
					image: 'assets/imgs/sliding-Images/timeline.png' 
				},
				{
					name:'Live Activities',
					description:`What are some of the daily activities that you do at outside? 
								Swiming, Walking, Running, To visit your daily activites join this room`,
					image: 'assets/imgs/sliding-Images/bicycle-rider.png' 
				},
				{
					name:'Social Components',
					description:`A social network is a social structure made up of a set of social actors, 
								'sets of dyadic ties, and other social interactions between actors. 
								You will find your social actors into this section`,
					image: 'assets/imgs/sliding-Images/megaphone.png' 
				},
				{
					name:'Gamification',
					description:`Gamification is the craft of deriving all the fun and addicting elements 
								found in games and applying them to real-world or productive activities. `,
					image: 'assets/imgs/sliding-Images/air-hockey.png' 
				}



				];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainIndexPage');
  }

}
