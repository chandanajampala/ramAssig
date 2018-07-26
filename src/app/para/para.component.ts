import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-para',
  templateUrl: './para.component.html',
  styleUrls: ['./para.component.css']
})

export class ParaComponent implements OnInit {
  @Input() textInput:Ipara;
  constructor() { }

  ngOnInit() {
  }

}

export interface Ipara {
  heading: string;
  para1: string;
  para2: string;
}