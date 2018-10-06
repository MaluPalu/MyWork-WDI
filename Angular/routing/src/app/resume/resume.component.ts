import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  jobIndex: Number;
  job;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.forEach( param => {this.job = JOBS.find(job => {
      return job.id === parseInt(param.id)
    });
  }
}
}
