import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Computer } from '../computers';
import { ComputersService } from '../computers.service';

@Component({
  selector: 'app-computer-detail',
  templateUrl: './computer-detail.component.html',
  styleUrls: ['./computer-detail.component.css']
})
export class ComputerDetailComponent implements OnInit {

  computer?: Computer
  error?:string
  constructor(private route: ActivatedRoute,
    private location:Location,
    private computerService: ComputersService) { }

  getComputerDetail(): void{
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log(id===this.computer?._id)
      this.computerService.getAComputer(id).subscribe(data => {
        if (data.failed) {
         this.error= data.message
        } else {
          this.computer=data
       }
      } )      
    } else {
      this.error="No Data to display"
    }

  }

  goBack(): void{
    this.location.back()
  }
  
  ngOnInit(): void {
    this.getComputerDetail()
  }



}
  


 