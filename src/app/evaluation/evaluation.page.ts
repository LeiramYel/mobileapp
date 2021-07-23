import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepressionScaleService } from './../services/depression-scale.service';



export interface question {
  title: string;
  answer: Number[];
}

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.page.html',
  styleUrls: ['./evaluation.page.scss'],
})
export class EvaluationPage implements OnInit {

  questions: question[] = [];
  answer: question["answer"] = [];

  
  depressionScale: string;
  constructor(private route: Router,private dss:DepressionScaleService) { }

  getQuestionResults(){
    // no need to "get" the results
    // they are already bound to the questions property
    console.log(this.questions);
   let sumA = 0;
     for (const q of this.questions) {
     sumA += Number(q.answer || 0);
   }
   if (sumA<=39){
      this.dss.setDepressionScale('    You have No signs of Depression based on the result of your assessment. Somehow this evaluation is for recommendation only and not a diagnosis. You should seek professional help from a doctor or mental health specialist.') 
   console.log("No Sign of Depression")
   }
   else if(sumA>=40 && sumA<=59){
 this.dss.setDepressionScale('    You have Mild Depression based on the result of your assessment. Somehow this evaluation is for recommendation only and not a diagnosis. You should seek professional help from a doctor or mental health specialist.')
    console.log("Mild Sign of Depression")
    }
    else if(sumA>=60 && sumA<=79){
 this.dss.setDepressionScale('    You have Moderate Depression based on the result of your assessment. Somehow this evaluation is for recommendation only and not a diagnosis. You should seek professional help from a doctor or mental health specialist.')
    console.log("Moderate Sign of Depression")
   }
   else if(sumA>=80 && sumA<=100){
 
 
   this.dss.setDepressionScale('    You have Severe Depression based on the result of your assessment. Somehow this evaluation is for recommendation only and not a diagnosis. You should seek professional help from a doctor or mental health specialist.')
 
   console.log("Severe Sign of Depression")
  }
  else{
   alert("Error!")
  }
  }
  
  
  home(){
    this.route.navigate(['/home']);
  }
  Result(){
    this.route.navigate(['/result']);
  }

  ngOnInit() {
    this.dss.depressionData$.subscribe((depressiondata)=>{
this.depressionScale=depressiondata
})
    // Questions
    for(let i = 1; i <= 1; i++) {
      this.questions.push({ title: `Little interest or pleasure in doing things`, answer: undefined });
      this.questions.push({ title: `Feeling down, depressed, or hopeless`, answer: undefined });
      this.questions.push({ title: `Trouble falling or staying asleep, or sleeping too much`, answer: undefined });
      this.questions.push({ title: `Feeling tired or having little energy`, answer: undefined });
      this.questions.push({ title: `Often has difficulty organizing tasks or activities`, answer: undefined });
      this.questions.push({ title: `Trouble concentrating on things, such as reading the newspaper or watching television`, answer: undefined });
      this.questions.push({ title: `Feeling bad about yourself — or that you are a failure or have let yourself or your family down`, answer: undefined });
      this.questions.push({ title: `Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual`, answer: undefined });
      this.questions.push({ title: `Thoughts that you would be better off dead or of hurting yourself in some way`, answer: undefined });
      this.questions.push({ title: `Been blaming yourself for things`, answer: undefined });
      this.questions.push({ title: `Feeling hopeless about future`, answer: undefined });
      this.questions.push({ title: `If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?`, answer: undefined });
      this.questions.push({ title: `did you feel so sad that nothing could cheer you up?`, answer: undefined });
      this.questions.push({ title: `did you feel so nervous that nothing could calm you down?`, answer: undefined });
      this.questions.push({ title: `Not being able to stop or control worrying`, answer: undefined });
      this.questions.push({ title: `Worrying too much about different things`, answer: undefined });
      this.questions.push({ title: `Trouble relaxing`, answer: undefined });
      this.questions.push({ title: `Being so restless that it is hard to sit still`, answer: undefined });
      this.questions.push({ title: `Becoming easily annoyed or irritable`, answer: undefined });
      this.questions.push({ title: `Feeling afraid, as if something awful might happen`, answer: undefined });
    }
  }
  
  
  }
  