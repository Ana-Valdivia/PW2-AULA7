import { Component } from '@angular/core';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello world';
  foto = 'favicon.ico';
  peso = 95;
  altura = 1.87;
  

  exibir(){
    alert(this.title);
  }

  exibir1(){

    
    alert(this.peso/(this.altura*this.altura));

  }
}
