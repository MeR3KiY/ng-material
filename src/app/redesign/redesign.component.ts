import { Component, OnInit } from '@angular/core';
import { User } from './models/redesign.model';
import { RedesignService } from './services/redesign.service';


@Component({
  selector: 'app-redesign',
  templateUrl: './redesign.component.html',
  styleUrls: ['./redesign.component.css']
})
export class RedesignComponent implements OnInit {

  displayedColumns: string[] = ['name', 'surname', 'icon', 'age', 'phone', 'joke',];

  index: any;

  users: User[] = [
    {
      name: 'Artem',
      surname: 'Pavlov',
      age: 20,
      phone: '88005553535',
      joke: '',
      icon: 'man',
    },
    {
      name: 'Artem',
      surname: 'Zolotov',
      age: 120,
      phone: '00000000000',
      joke: '',
      icon: 'circle',
    },
    {
      name: 'Artem',
      surname: 'Kirkorov',
      age: 60,
      phone: '89213858585',
      joke: '',
      icon: 'drive_eta',
    }
  ]



  constructor(private redesignService: RedesignService) { }

  getJoke() {
    for(let i = 0; i<3; i++) {
      this.redesignService.getJoke().subscribe((joke: any) => {
        this.users[i].joke = joke.category;
      });
    }
  }

  ngOnInit(): void {
    this.getJoke()
  }

  // 1. добавить каждому пользователю свою иконку человечек, круг и машинка
  // 2. по нажатию на элемент таблицы был переход на новый компонент - страница пользователя (пока одинаковая для всех страничка)
  // 3. добавить форму на страницу пользователя (mat-card, mat-input, mat-textarea, mat-slide-toggle, mat-select, mat-button)
  // 4. почитать про параметры в роутинге ангуляра или посмотретьь видосы
  // 5. rxjs посмотреть + почитать  https://www.youtube.com/watch?v=vj0kUzKOgGQ&ab_channel=Codevolution
}
