import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MaterialModule } from "../shared/material.module";
import { SharedModule } from "../shared/shared.module";
import { TaskComponent } from './task.component';

const routes: Routes = [
  {
    path: '', component: TaskComponent
  }
];

@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    MaterialModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class TaskModule {}
