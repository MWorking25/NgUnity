import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import {
  Observable
} from 'rxjs';
import {
  startWith,
  map
} from 'rxjs/operators';
import {
  Router
} from '@angular/router';
import * as $ from 'jquery';

export interface elementsGroup {
  type:string;
  name: string;
  link: string;
}

export interface searchObject {
  letter: string;
  elements: elementsGroup[];
}

export const _filter = (opt: elementsGroup[], value: string): elementsGroup[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.name.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

  stateForm: FormGroup = this.fb.group({
    itemGroup: '',
  });

  name: string;
  menu: Array < any > = [];
  itemGroup: searchObject[] = [{
      letter: 'A',
      elements: [{
        type:'Menu',
        name: 'Area',
        link: '/Authorised/areas'
      }, ]
    },
    {
      letter: 'B',
      elements: [{
        type:'Menu',
        name: 'Buses/Details',
        link: '/Authorised/areas'
      }, {
        type:'Menu',
        name: 'Buses/Bookings',
        link: '/Authorised/areas'
      },  
    ]
    },
    {
      letter:'C',
      elements:
      [{
        type:'Menu',
        name: 'Cabs/Bookings',
        link: '/Authorised/areas'
      },
      {
        type:'Menu',
        name: 'Cabs/Details',
        link: '/Authorised/areas'
      },]
    }
  ];


  elementsGroupOptions: Observable<searchObject[]>;


  profilebg = {
    firstcolor: 'rgb(255, 64, 129)',
    secondcolor: 'rgb(48, 63, 159)',
    colordegree: -90,
  };

  dataItems: Array < any > = [{
      primary: "rgb(48, 63, 159)",
      accent: "rgb(255, 64, 129)"
    },
    {
      primary: "rgb(25, 118, 210)",
      accent: "rgb(255, 82, 82)"
    },
    {
      primary: "rgb(56, 142, 60)",
      accent: "rgb(255, 82, 82)"
    },
    {
      primary: "rgb(175, 180, 43)",
      accent: "rgb(124, 77, 255)"
    },
    {
      primary: "rgb(245, 124, 0)",
      accent: "rgb(68, 138, 255)"
    },
    {
      primary: "rgb(0, 121, 107)",
      accent: "rgb(255, 171, 64)"
    },
  ];

  search: string;
  constructor(private _router: Router, private fb: FormBuilder) {}

  ngOnInit() {

    this.elementsGroupOptions = this.stateForm.get('itemGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );

    this.setupTheme();
    this.CheckRoute();
  }

  private _filterGroup(value: string): searchObject[] {
    if (value) {
      return this.itemGroup
        .map(group => ({letter: group.letter, elements: _filter(group.elements, value)}))
        .filter(group => group.elements.length > 0);
    }

    return this.itemGroup;
  }

  setupTheme() {
    localStorage.getItem('primaryBg') ? $("body").css("--primary", localStorage.getItem('primaryBg')) : $("body").css("--primary", "rgb(48, 63, 159)");
    localStorage.getItem('accentBg') ? $("body").css("--accent", localStorage.getItem('accentBg')) : $("body").css("--accent", "rgb(255, 64, 129)");
    localStorage.getItem('bgcolor1') ? $("body").css("--bgcolor1", localStorage.getItem('bgcolor1')) : $("body").css("--bgcolor1", this.profilebg.firstcolor);
    localStorage.getItem('bgcolor2') ? $("body").css("--bgcolor2", localStorage.getItem('bgcolor2')) : $("body").css("--bgcolor2", this.profilebg.secondcolor);
    localStorage.getItem('bgcolordeg') ? $("body").css("--bgcolordeg", localStorage.getItem('bgcolordeg')) : $("body").css("--bgcolordeg", this.profilebg.colordegree + 'deg');
  }

  SelectedItem(details) {
    details.primary ? localStorage.setItem('primaryBg', details.primary) : '';
    details.accent ? localStorage.setItem('accentBg', details.accent) : '';
    details.firstcolor ? localStorage.setItem('bgcolor1', details.firstcolor) : '';
    details.secondcolor ? localStorage.setItem('bgcolor2', details.secondcolor) : '';
    details.colordegree ? localStorage.setItem('bgcolordeg', details.colordegree + 'deg') : '';
    this.setupTheme();
  };

  CheckRoute() {
    let routerUrl: string;
    this._router.events.subscribe((router: any) => {
      routerUrl = router.urlAfterRedirects;

    });
  };
}
