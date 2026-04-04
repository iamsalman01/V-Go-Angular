import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
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
