import { Routes } from '@angular/router';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },  // Redirection par défaut
  { path: 'jobs', component: JobListComponent },        // Affiche la liste des jobs
  { path: 'job/:id', component: JobDetailComponent }    // Affiche le détail d'un job spécifique
];
