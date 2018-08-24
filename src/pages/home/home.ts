import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  words:Word[] = [
    new Word("Hi", "안녕"),
    new Word("This guy says hello, I wanna kill myself.", "얘가 '안녕' 이럴 때, 난 죽고 싶더라."),
    new Word("Ross, are you okay? Carol moved out today", "Ross, 괜찮아? Carol이 오늘 집 나갔대."),
    new Word("Ohh.", "저런"),
    new Word("I'll be fine… really. I hope she'll be very happy.", "괜찮을 거야. 정말로. 난 Carol이 정말 행복하길 빌어."),
    new Word("No, you don't.", "글쎄, 아닐걸."),
    new Word("No, I don't, actually, she left me!", "맞아, 아니야. 사실은, 그녀가 날 떠났잖아?"),
    new Word("You never knew she was a lesbian?", "Carol이 레즈비언이었다는 것도 몰랐단 말이야?"),
    new Word("No! She didn't know, how should I know?", "몰랐어. 본인도 몰랐는데, 내가 어떻게 알겠어?"),
    new Word("Anyway, I told my parents last night, they seemed to take it pretty well.", "어쨋든, 어제 부모님께 말씀 드렸어. 잘 받아들이시는 거 같아."),
    new Word("Oh really?", "정말?"),
    new Word("OK Ross, look. You're angry. You're lonely. Can I tell you what the answer is?", "좋아 Ross, 있잖아, 너 화도 나고, 외롭긴 하겠지만, 이럴 때 답이 뭔지 말해줄까?"),
    new Word("Strip joint! C'mon, you're single! I want you to join us.", "스트립쇼 극장에 가는 거야! 넌 이제 싱글이야! 난 네가 우리랑 함께하길 원한다구."),
    new Word("I don't wanna be single, okay? I just wanna be married again!", "난 싱글 원하지 않아, 알아? 난 단지 다시 결혼을 하고 싶다구."),
    new Word("And I just wanna be a millionaire!", "그럼… 난 백만장자가 되고 싶어!"),
  ];
  title:string = '일빵빵 영어회화1';
  idx:number = 0;
  meanFlag:boolean;
  directionOfMemory:boolean = true;

  constructor(public navCtrl: NavController) {
    this.meanFlag = this.directionOfMemory;
  }

  nextWord(memorized) {
    this.meanFlag = this.directionOfMemory;
    this.words[this.idx].setMemorized(memorized);

    if(this.idx < this.words.length-1) {
      this.idx++;
    } else {
      this.idx = 0;
    }
  }

  toggleWord() {
    this.meanFlag = this.meanFlag == true ? false : true;
  }
}

class Word {
    word:string;
    mean:string;
    memorized:boolean = false;

    constructor(word, mean) {
      this.word = word;
      this.mean = mean;
    }

    setMemorized(memorized) {
      this.memorized = memorized;
    }
}