import { Component, Input, OnInit, ViewChild,ElementRef} from '@angular/core';
import { ZIPCODES } from './zipcodes';
import { NgSelectComponent } from '@ng-select/ng-select';
@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css']
})

export class ZipcodeComponent implements OnInit {
  zipcodes: number[] = [];
  // selectedOption : any
  selectedZipCode: string = ''


  visibleOptions: any[] = [];
  lastOptions: any[] = [];

  // @ViewChild('dropdownOptions') dropdownOptionsRef!: ElementRef;
  @ViewChild('dropdownRef') dropdownRef: any;
  // @ViewChild('ngSelectRef') ngSelectRef: any;
  @ViewChild('ngSelectRef') ngSelectRef!: NgSelectComponent;
  @ViewChild('dropdownOptions') dropdownOptionsRef: any;



  ngOnInit(): void {
    const zipcodeArray: any = []
    // run in chucks if you have lakhs of records
    console.log('length of zipcodes', ZIPCODES.length)
    for (let i = 0; i < ZIPCODES.length; i++) {
      // console.log(ZIPCODES[i]['code']);
      zipcodeArray.push(ZIPCODES[i]['code'])
    }
    this.zipcodes = zipcodeArray
    // this.loadMoreItems(0, 10);
    this.loadMoreItems();
  }


  loadMoreItems() {
    console.log('load more')
    // Simulate loading more items (you can replace this with your data loading logic)
    const startIndex = this.visibleOptions.length;
    const count = 10; // Number of items to load
    const end = Math.min(startIndex + count, this.zipcodes.length);
    this.visibleOptions = this.visibleOptions.concat(this.zipcodes.slice(startIndex, end));
    // this.lastOptions = this.visibleOptions
  }

  onDropdownOpen() {
    console.log('open')
    // Reset visibleOptions when the dropdown is opened
    this.visibleOptions = [];
    // Load initial 10 items when the dropdown is opened
    this.loadMoreItems();

    // Access the dropdown element and attach the scroll event
    setTimeout(() => {
      // const dropdownEl = this.ngSelectRef.dropdownPanel.element.nativeElement;
      const dropdownOptionsEl = this.ngSelectRef.dropdownPanel.scrollElementRef.nativeElement;
      if (dropdownOptionsEl) {
        dropdownOptionsEl.addEventListener('scroll', this.onDropdownScroll.bind(this));
      }
    }, 0);
  }

  onSearch(searchText: any) {
    console.log('came to search', searchText.term)
    // Filter the options based on the search text
    this.visibleOptions = this.zipcodes.filter(option =>
      option.toString().includes(searchText.term)
    );
    if (!searchText.term) {
      console.log('came to no search text')
      this.onDropdownOpen()
      // this.visibleOptions = this.visibleOptions.concat(this.zipcodes.slice(0, 10));
    }
  }

  onDropdownScroll(event: Event) {
    const dropdownEl = event.target as HTMLElement;
    const scrollTop = dropdownEl.scrollTop;
    const scrollHeight = dropdownEl.scrollHeight;
    const clientHeight = dropdownEl.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      this.loadMoreItems();
    }
  }

}


















