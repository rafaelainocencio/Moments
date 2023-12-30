import { Component } from '@angular/core';
import { Moment } from 'src/Interfaces/Moment';
import { Router } from '@angular/router';

import { MomentService } from 'src/app/services/moment.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent {
  btnText = "Compartilhar!"

  constructor(
    private momentService: MomentService, 
    private messageService: MessageService,
    private router: Router) { }

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
      this.momentService.createMoment(formData).subscribe();

      //exibir mensagem
      this.messageService.add('Momento adicionado com sucesso!');

      //redirect
      this.router.navigate(['/']);
  }
}
