import {
  Injectable
} from '@angular/core';
import 'rxjs/add/operator/map';
import {
  Http
} from '@angular/http';
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject
} from '@ionic-native/file-transfer';


@Injectable()
export class ImageUploadProvider {

  constructor(public http: Http, private transfer: FileTransfer) {}

  // liveUrl = 'https://polar-mountain-79390.herokuapp.com/';
  devUrl = 'http://localhost:5000/user/';
 
  getImages() {
    return this.http.get(this.devUrl + 'fetchimages').map(res => res.json());
  }
 
  deleteImage(img) {
    return this.http.delete(this.devUrl + 'fetchimages/' + img._id);
  }
 
  uploadImage(img, desc) {
 
    // Destination URL
    let url = this.devUrl;
 
    // File for Upload
    var fileUrl = img;
    var trustAllHosts = true; 
 
    var options: FileUploadOptions = {
      fileKey: 'image',
      chunkedMode: false,
      mimeType: 'multipart/form-data',
      params: { 'desc': desc }
    };
 
    const fileTransfer: FileTransferObject = this.transfer.create();
 
    // Use the FileTransfer to upload the image
    return fileTransfer.upload(fileUrl, url, options,trustAllHosts).then((data)=>{
      console.log(data+" Uploaded Successfully");
    },(err)=>{
        console.log('Error',err)
    });
  }

}
