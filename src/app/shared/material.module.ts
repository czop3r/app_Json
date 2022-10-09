import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

const modulesArr = [
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatTableModule
];

@NgModule({
  imports: modulesArr,
  providers: [],
  exports: modulesArr,
})
export class MaterialModule {}
