// src/app/roles/auth/home/features/features.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit, OnDestroy {
  // Phrases to cycle through
  phrases: string[] = ['Time Tracking', 'Boost Productivity', 'Team Efficiency', 'Work Logs'];
  displayText: string = '';
  currentIndex: number = 0;
  private typingTimer: any;

  ngOnInit(): void {
    this.startAnimation();
  }

  ngOnDestroy(): void {
    if (this.typingTimer) clearInterval(this.typingTimer);
  }

  startAnimation() {
    let charIdx = 0;
    const fullText = this.phrases[this.currentIndex];

    this.typingTimer = setInterval(() => {
      this.displayText = fullText.substring(0, charIdx);
      charIdx++;

      if (charIdx > fullText.length) {
        clearInterval(this.typingTimer);
        setTimeout(() => this.deleteAnimation(), 2000); // Pause before deleting
      }
    }, 100);
  }

  deleteAnimation() {
    let charIdx = this.displayText.length;

    this.typingTimer = setInterval(() => {
      this.displayText = this.displayText.substring(0, charIdx);
      charIdx--;

      if (charIdx < 0) {
        clearInterval(this.typingTimer);
        this.currentIndex = (this.currentIndex + 1) % this.phrases.length;
        this.startAnimation();
      }
    }, 50);
  }
}