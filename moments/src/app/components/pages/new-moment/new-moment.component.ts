import { Component } from '@angular/core';
import { Moment } from 'src/Interfaces/Moment';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent {
  btnText = "Compartilhar!"

  //recebe os dados (que vem do evento) do componente filho
  async createHandler(moment: Moment) {
    const formData  = new FormData();

    formData.append("title", moment.title);
    formData.append("description", moment.description);
    
    if (moment.image) {
      formData.append("image", moment.image)
      }
      
      //TODO

      // enviar para o service

      //exibir mensagem

      //redirect
  }
}
