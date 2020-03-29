import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { RestApiService } from './services/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatIconRegistry} from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

export interface TableElement {
  id: string;
  name: string;
  email: string;
  website: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  Data: TableElement[];
  col: string[] = ['id', 'name', 'email', 'website'];
  dataSource = new MatTableDataSource<TableElement>(this.Data);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private restApiService: RestApiService) {

    this.restApiService.getUsers().subscribe((res) => {
      this.dataSource = new MatTableDataSource<TableElement>(res);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
  }
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
