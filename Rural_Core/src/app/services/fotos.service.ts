import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Platform } from '@ionic/angular';
import { Imagenes } from '../interfaces/interfaces';

/* Use the device camera to take a photo:
// https://capacitor.ionicframework.com/docs/apis/camera

// Store the photo data into permanent file storage:
// https://capacitor.ionicframework.com/docs/apis/filesystem

// Store a reference to all photo filepaths using Storage API:
// https://capacitor.ionicframework.com/docs/apis/storage
*/

@Injectable({
  providedIn: 'root'
})

export class FotosService {

  public photos: Imagenes[] = []
  private PHOTO_STORAGE: string = 'photos';


  constructor(private platform: Platform) { }

  /**
   * Método que carga todas las fotos de la galería de nuestro
   * dispositivo
   */
  public async loadSaved() {
    //Recuperar datos del array de fotos en caché
    const photoList = await Storage.get({ key: this.PHOTO_STORAGE });
    this.photos = JSON.parse(photoList.value) || [];
    //Si la aplicación esta corriendo en navegador web  
    if (!this.platform.is('hybrid')) {
      //muestra la foto leyendo en formato base64
      for (let photo of this.photos) {
        //Leemos los datos de cada foto guardada en el sistema de archivos
        const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data,
        });
        //Solo plataforma web: Carga la foto como datos base64
        photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
      }
    }
  }


  /**
   * Método con el que sacamos una foto y la almacenamos en nyestro
   * array para mostrarlo en la galeria de la aplicación
   */
  public async addNewToGallery() {
    //Tomamos una foto
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, //datos basados ​​en archivos; proporciona el mejor rendimiento
      source: CameraSource.Camera, //toma automáticamente una nueva foto con la cámara
      quality: 100 //nivel de calidad de 0 a 100
    });

    const savedImageFile = await this.savePicture(capturedPhoto);
    //Añadimos la nueva foto al array
    this.photos.unshift(savedImageFile);
    // Almacenar en caché todos los datos de las fotos para recuperarlos en el futuro
    Storage.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });
  }


  /**
   * Método con el que guardamos la imagen como un archivo
   * en el dispositivo
   * 
   * @param cameraPhoto 
   * @returns 
   */
  private async savePicture(cameraPhoto: Photo) {
    //Convertimos la foto al formato base64,
    //requerido por la API del sistema de archivos para guardar
    const base64Data = await this.readAsBase64(cameraPhoto);
    //Escribimos el archivo en el directorio de datos.
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    if (this.platform.is('hybrid')) {
      //Muestre la nueva imagen reescribiendo la ruta 'file://' a HTTP
      //Más detalles: https://ionicframework.com/docs/building/webview#file-protocol
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    } else {
      //Usamos el webPath para mostrar la nueva imagen en lugar de base64 ya que es
      //ya cargado en memoria
      return {
        filepath: fileName,
        webviewPath: cameraPhoto.webPath,
      };
    }
  }


  /**
   * Método con el que leemos la foto de la cámara en formato base64 según la plataforma
   * en la que se ejecuta la aplicación
   * 
   * @param cameraPhoto 
   * @returns 
   */
  private async readAsBase64(cameraPhoto: Photo) {
    //"hybrid" detectará si usamos Cordova o Capacitor
    if (this.platform.is('hybrid')) {
      //Leemos el archivo en formato base64
      const file = await Filesystem.readFile({
        path: cameraPhoto.path,
      });
      return file.data;
    } else {
      //Obtenemos la foto y la leemos como un blob y luego se convierte al formato base64
      const response = await fetch(cameraPhoto.webPath!);
      const blob = await response.blob();
      return (await this.convertBlobToBase64(blob)) as string;
    }
  }


  /**
   * Método que elimina la imagen eliminándola de los datos de referencia
   * y del sistema de archivos
   * 
   * @param photo 
   * @param position 
   */
  public async deletePicture(photo: Imagenes, position: number) {
    //Se elimina la foto del array de datos de referencia de Fotos
    this.photos.splice(position, 1);

    //Se actualiza la memoria caché del array de fotos sobrescribiendo
    //el array de fotos existente
    Storage.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });

    //Eliminamos el archivo de imagen del sistema de archivos
    const filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);
    await Filesystem.deleteFile({
      path: filename,
      directory: Directory.Data,
    });
  }


  /**
   * Método que transforma datos de tipo blob a base64
   * 
   * @param blob 
   * @returns 
   */
  convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
}
