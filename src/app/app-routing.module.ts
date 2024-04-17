import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { EmptySpaceComponent } from './empty-space/empty-space.component';
import { NdaComponent } from './nda/nda.component';
import { GenFramComponent } from './gen-fram/gen-fram.component';
import { StuartBlueComponent } from './stuart-blue/stuart-blue.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '404', component: ErrorComponent },
  {
    path: 'emptyspace-photo',
    component: EmptySpaceComponent,
  },
  { path: 'nda', component: NdaComponent },
  { path: 'gen-fram', component: GenFramComponent },
  { path: 'stuart-blue', component: StuartBlueComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
