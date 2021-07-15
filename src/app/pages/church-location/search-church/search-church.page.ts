import { Component, HostListener, OnInit } from '@angular/core';
import { ChurchModel } from '../church-model/church-model';
import { ChurchLocationService } from '../church-service/church-location.service';

@Component({
  selector: 'app-search-church',
  templateUrl: './search-church.page.html',
  styleUrls: ['./search-church.page.scss'],
})
export class SearchChurchPage implements OnInit {
  churches: ChurchModel[] = [];
  churchesBackup: ChurchModel[] = [];
  queryText: string = '';

  showSearchBar: boolean = false;

  screenHeight: number;
  screenWidth: number;

  constructor(private churchService: ChurchLocationService) { }

  ngOnInit() {
    this.getScreenSize();

    this.churches = this.churchService.churches;

    if(this.churches === undefined){
      this.churchService.getChurches().subscribe(churches => this.churches = churches);
    }

    this.churchesBackup = this.churches;
    this.churches.forEach(church => console.log(church.churchName))
  }

  searchForChurch(){

    if(this.queryText === ''){
      this.churches = this.churchesBackup;
      return this.churches;
    }

    this.churches = this.churches.filter(church => {
      if(church.churchName && this.queryText !== ''){
        return (church.churchName.toLowerCase().indexOf(this.queryText.toLowerCase()) > -1)
      }
    });
    
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?){
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
          console.log(this.screenHeight, this.screenWidth);
  }

}
