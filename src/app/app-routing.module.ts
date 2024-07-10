import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

const routes: Routes = [
  {
    path:"",redirectTo:"/Comp1",pathMatch:"full"
  },
  {
    path:"Comp1",component:Comp1Component
  },
  { path: 'comp2', component: Comp2Component 

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
