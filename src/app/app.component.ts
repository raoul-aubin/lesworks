import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Job } from './jobs/job.model';
import { JobService } from './jobs/job.service';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'les_works';

  selectedJob: Job | null = null;
  constructor(private jobService: JobService) { }

  // Méthode appelée quand JobListComponent émet un job
  onJobSelected(job: Job) {
    this.selectedJob = job;
    console.log(this.jobService);
  }
}
