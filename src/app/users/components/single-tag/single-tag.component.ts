import {Component, Input, OnInit} from '@angular/core';
import {TopTag} from '../../models/top-tag';

@Component({
  selector: 'app-single-tag',
  templateUrl: './single-tag.component.html',
  styleUrls: ['./single-tag.component.scss']
})
export class SingleTagComponent implements OnInit {

  @Input() tag: TopTag;
  @Input() isSmall = false;
  constructor() { }

  ngOnInit() {
  }

}
