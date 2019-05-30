import { Component, OnInit } from '@angular/core';

interface Patient {
  nhsnumber: number;
  hospitalnumber: number;
  surname: string;
  name: string;
}

const PATIENTS: Patient[] = [
  {
    "nhsnumber": 4494401805,
    "hospitalnumber": 644827,
    "surname": "Sutherland",
    "name": "Donna"
  },
  {
    "nhsnumber": 4699174674,
    "hospitalnumber": 402275,
    "surname": "Heath",
    "name": "Ernest"
  },
  {
    "nhsnumber": 209085707,
    "hospitalnumber": 380464,
    "surname": "McCarthy",
    "name": "Marcia"
  },
  {
    "nhsnumber": 343242448,
    "hospitalnumber": 456458,
    "surname": "Schroeder",
    "name": "Lewis"
  },
  {
    "nhsnumber": 5741251632,
    "hospitalnumber": 181843,
    "surname": "Kane",
    "name": "Theresa"
  }
];

@Component({
  selector: 'app-ptsearch',
  templateUrl: './ptsearch.component.html',
  styleUrls: ['./ptsearch.component.scss']
})
export class PtsearchComponent implements OnInit {
  patients = PATIENTS;
  constructor() { }

  ngOnInit() {
  }

}
