import {Component, Input, OnInit} from '@angular/core';
import {TopTag} from '../../models/top-tag';

@Component({
  selector: 'app-user-top-tags',
  templateUrl: './user-top-tags.component.html',
  styleUrls: ['./user-top-tags.component.scss']
})
export class UserTopTagsComponent implements OnInit {

  @Input() tags: TopTag[];

  constructor() {
  }

  ngOnInit() {
  }

}
