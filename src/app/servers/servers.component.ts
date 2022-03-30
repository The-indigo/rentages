import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Computer } from '../computers';
import { ComputersService } from '../computers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers: Computer[] = []
  isLoading: boolean = false;
   isLoggedIn = this.authService.isloggedIn()
  constructor(private computerService:ComputersService, private authService:AuthService) { }

  getServers(): void{
          this.isLoading = true;
    this.computerService.getComputers().subscribe(data => {
      console.log(data)
      this.servers = data.filter((n) => n.isServer == true)
            this.isLoading = false;
    })
  }

  ngOnInit(): void {
    this.getServers()
    
  }
}