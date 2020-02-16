import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {


  myControl = new FormControl();
  options: string[] = ['Chennai', 'Salem', 'Coimbatore'];
  public showSearchPane: boolean;
  private mediaSub: Subscription;

  constructor(
    private cdRef: ChangeDetectorRef,
    private mediaObserver: MediaObserver) { }

  ngOnInit() {
    this.showSearchPane = false;
  }

  ngOnDestroy() {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }
  }

  searchItems(styleDisplay: string): void {
    console.log(styleDisplay);
    if (styleDisplay === 'none') {
      this.showSearchPane = !this.showSearchPane;
    } else {
      this.doSearch();
    }
  }

  doSearch(): void {
    console.log('Do actual search');
  }
}
