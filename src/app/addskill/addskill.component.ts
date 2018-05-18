import { Component, OnInit } from '@angular/core';
import{AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import{ Observable } from 'rxjs/Observable';
import{AngularFireAuth} from 'angularfire2/auth';


import{Router} from '@angular/router';

@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {

data ={

name:'',
phone:'',
skill:'',
province:'',
price:'',
comments:''




}

email:string='';

itemList:AngularFireList<any>

uid:any;

 
  constructor(private fire:AngularFireAuth,public db:AngularFireDatabase,public router:Router) {
    this.itemList=db.list('skills')
    
   }

  ngOnInit() {
   let user=localStorage.getItem('email')
   this.email=user
   console.log(user)
   this.fire.authState.subscribe(auth=>{
     if(auth){
       this.uid=auth.uid
     }
   })

  }
  insertSkill(){
    this.itemList.push({
      name:this.data.name,
phone:this.data.phone,
skill:this.data.skill,
province:this.data.province,
price:this.data.price,
comment:this.data.comments,
email:this.email,
uid:this.uid


    })
    this.router.navigate(['/myskill'])
  }

}
