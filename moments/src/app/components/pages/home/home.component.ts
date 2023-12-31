import { Component } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/Interfaces/Moment';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl = 'http://localhost:3333/api/moments';

  constructor(
    private momentService: MomentService){}

    ngOnInit(): void{
      console.log('this.allMoments');
      this.momentService.getMoments().subscribe((items) => {
        const data = items.data;

        data.map((item) => {
          item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
        })
        this.allMoments = data
        this.moments = data
      });
      console.log(this.allMoments);
    }
}
