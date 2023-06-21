import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-drag-drop-test';

  goodGames = [
    "Mafia 2", "GTA V", "Tunic", "Batman Arkham Night", "Shadow Of The Tomb Raider", "God Of War", "Uncharted 4",
  ];

  wishlistGames = [
    "Elden Ring",
    "Mafia 3",
    "Hogwarts Legacy",
    "The Witcher 3",
    "Death's Door",
    "Rise Of The Tomb Raider",
  ];

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      )
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      )
    }

  }
}
