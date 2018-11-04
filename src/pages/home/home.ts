import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  //allData : [];
  id : any;
  inputID = '';
  datID = '' ;
  datTitle = '' ;
  datSpecies = '';
  datGender = '';
  datStatus = '';
  postList: any;
items;
take : string = this.inputID;
data: number = +'this.take';

array : any;
  constructor(public navCtrl: NavController, public remoteService : RemoteServiceProvider, public http: HttpClient) {
   this.getAllPosts();
    this.initializeItems();
  }
initializeItems()
{
  this.items = [
    'Amsterdam',
    'Bogota',
    'Buenos Aires'

  ];
}

getPosts(inpuID : String) {
  console.log(this.inputID);
 // this.take = this.inputID;
  //this.data = +this.take ;
   this.remoteService.getPosts(this.inputID)
  //this.http.get(this.remoteService.getPosts+this.inputID)
  //console.log(this.remoteService.getApiUrl+'?id='+this.datID);
  
  .subscribe((res : Response) =>
  {
    console.log("keluar");
    //console.log(this.take);
    const datDetail : any = res;
    console.log(datDetail);
    this.datID = datDetail.id;
      console.log(this.datID);
     this.datTitle = datDetail.name;
     this.datGender = datDetail.gender;
     this.datSpecies = datDetail.species;
     this.datStatus = datDetail.status;
       console.log(this.datTitle);
    });
}

getAllPosts(){
  this.http.get('https://rickandmortyapi.com/api/character/').map(res => res).subscribe( data => 
    { 
      this.array = (<any>data).results;
      console.log(this.array)
     }, err =>  {
     console.error(err); 
    });  
}
  
}
