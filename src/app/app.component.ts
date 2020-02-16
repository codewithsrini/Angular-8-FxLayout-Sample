import { Component, OnInit, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  items: SampleItem[];

  private mediaSub: Subscription;
  constructor(
    private cdRef: ChangeDetectorRef,
    private mediaObserver: MediaObserver,
  ) {

  }

  ngOnInit() {

    this.items = ITEMS;
    // this.mediaSub = this.mediaObserver.media$.subscribe(
    //   (change: MediaChange) => {
    //     console.log(change.mqAlias);
    //   });

    this.mediaSub = this.mediaObserver.asObservable().subscribe(change => {
      change.forEach((v) => {
        console.log(v.mediaQuery, v.mqAlias);
      });
      console.log('-----');
    });
  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }
  }
}

export interface SampleItem {
  title: string;
  image: string;
  description: string;
}

const ITEMS: SampleItem[] = [
  {
    title: 'Lorem ipsum dolor sit amet',
    image: 'https://picsum.photos/id/888/300/200',
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur, ante eu auctor blandit, diam libero suscipit metus, sit amet lacinia nulla urna sed libero.',
  },
  {
    title: 'Sit amet lacinia nulla urna sed libero',
    image: 'https://picsum.photos/id/888/300/200',
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur, ante eu auctor blandit, diam libero suscipit metus, sit amet lacinia nulla urna sed libero.',
  },
  {
    title: 'Aiam libero suscipit metus',
    image: 'https://picsum.photos/id/888/300/200',
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur, ante eu auctor blandit, diam libero suscipit metus, sit amet lacinia nulla urna sed libero.',
  },
  {
    title: 'Aiam libero suscipit metus',
    image: 'https://picsum.photos/id/888/300/200',
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur, ante eu auctor blandit, diam libero suscipit metus, sit amet lacinia nulla urna sed libero.',
  },
  {
    title: 'Ante eu auctor blandit',
    image: 'https://picsum.photos/id/888/300/200',
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur, ante eu auctor blandit, diam libero suscipit metus, sit amet lacinia nulla urna sed libero.',
  },
  {
    title: 'Pellentesque efficitur',
    image: 'https://picsum.photos/id/888/300/200',
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur, ante eu auctor blandit, diam libero suscipit metus, sit amet lacinia nulla urna sed libero.',
  },
  {
    title: 'consectetur adipiscing elit',
    image: 'https://picsum.photos/id/888/300/200',
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur, ante eu auctor blandit, diam libero suscipit metus, sit amet lacinia nulla urna sed libero.',
  },
];

