import { Component, Injectable, OnInit } from '@angular/core';
import { Reclamation } from '../models/reclamation';
import { TserviceService } from '../tservice.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public Rec:Reclamation;
  public status_task;
  rectest:Reclamation;

  constructor(
    private _testservice: TserviceService
  ) {}

  ngOnInit(): void {
    this.Rec = new Reclamation(1,'','','New',new Date());
    
  
    
  }

onSubmit(){
  this._testservice.create(this.Rec).subscribe(
    data=>{console.log(data);}
  );
  
}




}
