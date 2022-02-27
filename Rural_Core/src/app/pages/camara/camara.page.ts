import { Component, OnInit } from '@angular/core';
import { FotosService } from 'src/app/services/fotos.service';
import { ActionSheetController } from '@ionic/angular';
import { Imagenes } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  constructor(public fotoService: FotosService, private actionSheetCtrl: ActionSheetController) { }

  async ngOnInit() {
    await this.fotoService.loadSaved();
  }


  public async showActionSheet(photo: Imagenes, position: number) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.fotoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
        }
      }]
    });
    await actionSheet.present();
  }

}
