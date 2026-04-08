import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isOpen:Boolean = false
  ngOnInit(){}
  
  
  toggleMenu(){
  this.isOpen = !this.isOpen
  }
  closeDialog(){
    this.isOpen = false;
  }
}
