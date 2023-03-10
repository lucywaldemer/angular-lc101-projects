import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Complete LaunchCode prep work', 'Clean bathroom'];
   todoTitles = [ "Today's Chores",  "Next week's Chores"];

   constructor() { }

   ngOnInit() {
   }

}
