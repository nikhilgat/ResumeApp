import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { MainComponent } from './components/main/main.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {path: '' , component: EditComponent },
  {path: 'main' , component: MainComponent},
  {path: 'edit' ,  component: EditComponent  },
  {path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
