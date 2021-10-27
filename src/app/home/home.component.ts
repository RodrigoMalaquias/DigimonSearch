import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { digimon } from '../shared/digimon'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string = '';
  dataApi : any;
  digimon : digimon = {
    name: "",
    img: "",
    level:""
  };
  
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  searchDigimon(){
    this.dataApi = null
    this.http.get(`https://digimon-api.vercel.app/api/digimon/name/${this.name}`).subscribe(
      (dados) => {
        this.dataApi = dados;
        this.updateDigimon()
      },
      (err) => {
        console.log(`Error consuming API -> ${err.error.ErrorMsg}`)
        this.updateDigimon()
      }
    )
  }

  updateDigimon(){
    if(this.dataApi != null){
      this.digimon.name = this.dataApi[0].name;
      this.digimon.img = this.dataApi[0].img;
      this.digimon.level = this.dataApi[0].level;
    }
    else{
      this.digimon.img = "https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg"
    }
  }

}
