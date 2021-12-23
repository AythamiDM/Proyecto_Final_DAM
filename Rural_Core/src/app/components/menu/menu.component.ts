import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { menuOpts } from 'src/app/interfaces/interfaces';
import { MenuOptsService } from 'src/app/servicios/menu-opts.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menuOpts: Observable<menuOpts[]>;

  constructor(private dataService: MenuOptsService) { }

  ngOnInit() {
    this.menuOpts = this.dataService.getMenuOpts();
  }

}
