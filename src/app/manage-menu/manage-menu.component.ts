import { Component, OnInit } from '@angular/core';
import { MydataService } from '../mydata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../menu';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-menu',
  templateUrl: './manage-menu.component.html',
  styleUrls: ['./manage-menu.component.css']
})
export class ManageMenuComponent implements OnInit {
  restId: string|null='';
  restMenuitems:Menu[]=[];
  MenuList:Menu[]=[];
  frmMenuGroup:FormGroup;
  constructor(private srv:MydataService,private curroute:ActivatedRoute,private route:Router, private fb:FormBuilder){
    this.frmMenuGroup=fb.group({
        dishName:new FormControl('',[Validators.required]),
        dishType:new FormControl('',[Validators.required]),
        dishPrice:new FormControl('',[Validators.required])
    });
    this.curroute.paramMap.subscribe((pm)=>{
      this.restId=pm.get('rid')
    });
  }

  ngOnInit(): void {
    this.refreshGrid();
  }
  refreshGrid(){
    this.srv.getMenuList().subscribe({
      next:(res)=>{
        var allmenu:Menu[]=<Menu[]>res;
        if(allmenu.length>0){
          this.restMenuitems=allmenu.filter((m)=>m.rid==this.restId);
        }
      },
      error:(err)=>{}
    }
  )
  }
  OnNewDishAdd(){
    console.log(this.frmMenuGroup.value);
    // var menuitems:Menu={dishname:this.frmMenuGroup.value.dishName, dishtype:this.frmMenuGroup.value.dishType,price:this.frmMenuGroup.value.price    
    };
  }


