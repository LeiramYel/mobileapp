import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepressionScaleService } from './../services/depression-scale.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit{
 
  depressionScale: string;
  constructor(private route: Router,private dss:DepressionScaleService){}
  home(){
    this.route.navigate(['/home']);
  }
  ngOnInit(){
    this.dss.depressionData$.subscribe((depressiondata)=>{
    this.depressionScale=depressiondata
    })
    }
 
}