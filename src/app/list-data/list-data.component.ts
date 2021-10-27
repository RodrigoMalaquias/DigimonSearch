import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { digimon } from '../shared/digimon';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {

  listDigimon : any
  page : string = "1" ;
  amount : string = "5";

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.getRepos()
  }

  getRepos(){
    this.http.get("https://digimon-api.vercel.app/api/digimon").subscribe(
      (dados) => {
        this.listDigimon = dados
      },
      (err) => {
        console.log(`Error consuming API -> ${err.error.ErrorMsg}`)
      },
      () => {
        this.listDigimon.sort((one : any, two : any) => (one.name > two.name ? 1 : -1));
      }
    )
  }

  handlePageChange(event : any) {
    this.page = event;
  }

}
