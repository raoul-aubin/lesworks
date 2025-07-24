import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { JobService } from '../job.service';
import { Job } from '../job.model';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  jobs: Job[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobs = this.jobService.getJobs();
  }
}
