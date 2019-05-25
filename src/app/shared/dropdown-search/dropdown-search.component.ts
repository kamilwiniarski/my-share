import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'dropdown-search',
  templateUrl: './dropdown-search.component.html',
  styleUrls: ['./dropdown-search.component.scss']
})
export class DropdownSearchComponent implements OnInit {

  @Input() placeholder: string;
  @Input() selectedResults: any[];

  $results: Observable<any[]>;
  showResults: boolean;
  queryField: FormControl;

  constructor(private http: HttpClient) { }

  // TODO: decide if search sholud be on BE/FE

  ngOnInit() {
    this.queryField = new FormControl();
    this.showResults = false;
    this.$results = this.queryField.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(searchQuery => this.search(searchQuery, this.selectedResults)),
        );
  }

    onFocus(): void {
    if (!this.showResults) {
      this.showResults = true;
      // this.open.emit(this.showResults);
    }
  }

    private search(searchQuery: string, selectedResults: any[]): Observable<any> {
    if (searchQuery.trim() && searchQuery.trim().length > 1) {
      const URL = 'testURL';
      return this.http.get(URL);
    } else {
      return of([]);
    }
  }

}


// import
//  { Component, OnInit, Input, EventEmitter, Output, HostListener, ElementRef, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
// import { FormControl } from '@angular/forms';
// import { Observable, of, Subject } from 'rxjs';
// import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
// import { SVGIconEnum } from 'src/app/shared/enums/svg-icon.enum';
// import { HttpClient } from '@angular/common/http';
// import { FormService } from '../form.service';

// @Component({
//   selector: 'form-autocomplete',
//   templateUrl: './form-autocomplete.component.html',
//   styleUrls: ['./form-autocomplete.component.scss']
// })
// export class FormAutocompleteComponent implements OnInit, OnChanges, OnDestroy {

//   @Input() placeholder: string;
//   @Input() searchUrl: string;
//   @Input() relationType: string;
//   @Input() selectType: string;
//   @Input() selectedList: any;
//   @Input() queryValue: string;

//   searchIcon = SVGIconEnum.SEARCH;
//   $results: Observable<any[]>;
//   showResults: boolean;
//   queryField: FormControl = new FormControl();
//   // private $unsubscribe = new Subject<void>();

//   @Output() inputValue: EventEmitter<string> = new EventEmitter();
//   @Output() open: EventEmitter<boolean> = new EventEmitter();

//   @HostListener('window:click', ['$event'])
//   onclick(event) {
//     if (!this.element.nativeElement.contains(event.target)) {
//       this.showResults = false;
//       this.open.emit(this.showResults);
//     }
//   }

//   constructor(
//     private element: ElementRef,
//     private http: HttpClient
//   ) { }

//   ngOnChanges(changes: SimpleChanges): void {
//     if (changes.queryValue && changes.queryValue.firstChange) {
//        this.queryField.patchValue(this.queryValue);
//     }
//   }

//   ngOnInit() {
//     this.showResults = false;
//     this.$results = this.queryField.valueChanges
//       .pipe(
//         debounceTime(200),
//         distinctUntilChanged(),
//         switchMap(searchQuery => this.search(searchQuery, this.relationType)),
//         map(results => this.filterResults(results, this.selectedList))
//         );
//     // this.formService.formReset().pipe(takeUntil(this.$unsubscribe)).subscribe(() => this.queryField.patchValue(''));
//   }

//   ngOnDestroy(): void {
//     // this.$unsubscribe.next();
//     // this.$unsubscribe.complete();
//   }


//   chooseResult(result: any): void {
//     this.inputValue.emit(result);
//     if (this.selectType === 'multiselect') {
//       this.queryField.patchValue('');
//     } else {
//       this.queryField.patchValue(result.key);
//     }
//     this.showResults = false;
//     this.open.emit(this.showResults);
//   }



//   private filterResults(allResults: any[], selectedResults: any[] | undefined): any[] {
//     if (selectedResults && selectedResults.length) {
//       const filteredResults = allResults.filter(el => selectedResults.indexOf(el) < 0);
//       return filteredResults;
//     } else {
//       return allResults;
//     }
//   }

//   private checkSearchUrl(url: string): string {
//     return url.includes('?') ? '&' : '?';
//   }
// }
