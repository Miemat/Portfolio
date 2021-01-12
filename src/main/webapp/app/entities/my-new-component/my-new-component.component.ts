import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'jhi-new-component',
  templateUrl: './my-new-component.component.html',
})
export class MyNewComponent implements OnInit {
  constructor(private translateService: TranslateService, private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
