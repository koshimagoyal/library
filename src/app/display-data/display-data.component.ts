import { Component, OnInit } from '@angular/core';

import { LibService } from '../lib.service';
import { Library } from '../library';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss'],
})
export class DisplayDataComponent implements OnInit {

  private allLib: Observable<Library[]>;
  public get allLibb(): Observable<Library[]> {
    return this.allLib;
  }
  public set allLibb(value: Observable<Library[]>) {
    this.allLib = value;
  }
  constructor(public libService: LibService) { }

  loadDisplay() {
    this.allLibb = this.libService.GetData();
  }
  deleteData(id: any) {
    this.libService.deleteData(id).subscribe(data => {
      return this.loadDisplay();
    });
  }
  ngOnInit() {
    this.loadDisplay();
  }

}
