import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { question } from '../evaluation/evaluation.page';


@Injectable({
  providedIn: 'root'
})

export class DepressionScaleService {
  
  constructor() { }
  private depressionData = new BehaviorSubject<any>('')
  public depressionData$ = this.depressionData.asObservable();
  
  setDepressionScale(question: string){
  this.depressionData.next(question)
  }
  
}
