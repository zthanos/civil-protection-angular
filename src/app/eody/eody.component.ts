import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eody',
  templateUrl: './eody.component.html',
  styleUrls: ['./eody.component.scss']
})
export class EodyComponent implements OnInit {
  panelOpenState = false;
  data = new EodyData().Items;
  constructor() { }

  ngOnInit(): void {
  }

}


class EodyData {
  Items = [
    {
      Title: 'Οδηγίες προφύλαξης για το κοινό',
      Description : ''
    },
    {
      Title: 'Ερωτήσεις και απαντήσεις για το νέο κορωνοϊό COVID-19',
      Description : ""
    },
    {
      Title: 'Οδηγίες για απομόνωση επαφών στο σπίτι',
      Description : ""
    },
    {
      Title: "Οδηγίες για παραμονή παιδιών και εφήβων στο σπίτι",
      Description : ""
    },
    {
      Title: 'Υγιεινή των χεριών',
      Description : ""
    },
    {
      Title: 'Οδηγίες για φροντίδα ύποπτου ή επιβεβαιωμένου κρούσματος στο σπίτι',
      Description : ""
    },
    {
      Title: 'Οδηγίες για ευπαθείς ομάδες',
      Description : ""
    },
    {
      Title: 'Τρόφιμα και SARS–CoV-2 – Καλές πρακτικές',
      Description : ""
    }
  ]  
}