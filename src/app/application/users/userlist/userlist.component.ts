import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ApiService} from "../../../service/api.service"
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  currentPage: number = 1;
  page?: number;
  totalCount: number ;
  userlist: any[] = [];
  maxSize: number = 10;
  sort = 1
  skip = 0
  limit=10


  constructor(private apiservice :ApiService) { }

  
  ngOnInit(): void {
    let  data={
      skip:this.skip,
      limit:this.limit,
      sort:this.sort
    }
    this.apiservice.userlist(data).subscribe((details:any)=>{
      if(details.status){
        this.userlist = details.data
        this.totalCount = details.count
      }
    })

    this.userlist = this.userlist.slice(0, this.maxSize);
  }

  pageChanged(event: PageChangedEvent): void {
    this.skip = (event.page - 1) * event.itemsPerPage;
    this.limit = event.page * event.itemsPerPage;
    let  data={
      skip:this.skip,
      limit:this.limit,      
      sort:this.sort
    }
    this.apiservice.userlist(data).subscribe((details:any)=>{
      if(details.status){
        this.userlist = details.data
        this.totalCount = details.count
      }
    })
  }


  sorting(sort:any){
    console.log(sort);
    this.sort = sort*-1
    console.log(this.sort);   
    let  data={
      skip:this.skip,
      limit:this.limit,      
      sort:this.sort
    }
    this.apiservice.userlist(data).subscribe((details:any)=>{
      if(details.status){
        this.userlist = details.data
        this.totalCount = details.count
      }
    })

  }



}
