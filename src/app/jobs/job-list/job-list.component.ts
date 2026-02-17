import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { JobService } from '../job.service';
import { Job } from '../job.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  jobs: Job[] = [];

  constructor(private jobService: JobService, private router: Router) {}

  ngOnInit(): void {
    this.jobs = this.jobService.getJobs();
  }

  goToJobDetail(job: Job): void{
    this.router.navigate(['/job', job.id]);
  }
}
