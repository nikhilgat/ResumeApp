import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path: '' , component: MainComponent },
  {path: 'main' , component: MainComponent},
  {path: 'edit' ,  component: EditComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
