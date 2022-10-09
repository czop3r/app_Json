import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { DatabaseService } from '../database.service';
import { DialogComponent } from './dialog.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['work_order_id', 'description', 'received_date', 'status'];
  dataSource = new MatTableDataSource();

  public data: any;

  private $sub = new Subscription()

  constructor(private db: DatabaseService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getData();
  }

  ngOnDestroy() {
    this.$sub.unsubscribe();
  }

  public openDialog(data: {}) {
    this.dialog.open(DialogComponent, {
      width: '70%',
      data: {data},
    });
  }


  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private getData() {
    this.$sub.add(this.db.fetchData().subscribe(res => {
      this.data = res.response.data
      this.dataSource = new MatTableDataSource(this.data);
    }))
  }
}
