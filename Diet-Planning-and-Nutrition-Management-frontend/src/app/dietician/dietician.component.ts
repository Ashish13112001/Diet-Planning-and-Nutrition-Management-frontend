import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dietician',
  templateUrl: './dietician.component.html',
  styleUrls: ['./dietician.component.css']
})
export class DieticianComponent {
  constructor(private router: Router){}
  resolveProblem(){
    this.router.navigate(['/resolve'])
  }
}
