import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public counter = signal<number>(0);
  public isValid = computed(()=>{
    const c = this.counter();
    if(c > 0 )
    {
      return true;
    }
    else{
      return false;
    }
  }
    
  );

  restart() {
    this.counter.set(0);
  }

  sum() {
    this.counter.update((c) => c + 1);
  }
}
