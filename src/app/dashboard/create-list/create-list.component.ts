import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {

  formType: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.formType = this.route.snapshot.url[0].path;
  }

}
