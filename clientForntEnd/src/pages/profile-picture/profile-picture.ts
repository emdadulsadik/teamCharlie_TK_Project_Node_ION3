import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UsertabsPage } from '../usertabs/usertabs';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-profile-picture',
  templateUrl: 'profile-picture.html',
})
export class ProfilePicturePage {
   selectedFile: File = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage, private http:HttpClient) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePicturePage');
  }
  onFileChanged(event) {
     this.selectedFile = <File>event.target.files[0]
  }
  onUpload() {
    // upload code goes here
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name)
    this.http.post('http://localhost:5000/user/upload',fd).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log("err",err); 
    })

  }
  /**
 * @description- Get the token value form sqlLite Storage
 * @author-Khondakar Readul Islam
 * @type {Promise<any>}
 * @memberOf UserManagementPage
 */
token:Promise<any> = this.storage.get('token').then((val)=>{
  return this.token = val;
}).catch(
  (err)=>{
    console.log(err);
  }
)


/**
* @description- Change the Footbar to default if token is null
* @author-Khondakar Readul Islam
* @memberOf UserManagementPage
*/
goToRootAgain(){
  this.storage.get('token').then((val)=>{
    if(val==null){
      this.navCtrl.setRoot(TabsPage); 
    }else{
      this.navCtrl.setRoot(UsertabsPage); 
    }
  })
}

}
