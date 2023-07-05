import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from "@angular/cdk/drag-drop";
import { field, value } from './global.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog: MatDialog) { }

  title = 'angular-drag-drop-test';

  // goodGames = [
  //   "Mafia 2",
  //   "GTA V",
  //   "Tunic",
  //   "Batman Arkham Night",
  //   "Shadow Of The Tomb Raider",
  //   "God Of War",
  //   "Uncharted 4",
  // ];

  // wishlistGames = [
  //   "Elden Ring",
  //   "Mafia 3",
  //   "Hogwarts Legacy",
  //   "The Witcher 3",
  //   "Death's Door",
  //   "Rise Of The Tomb Raider",
  // ];

  fieldModels: Array<field> = [
    {
      "type": "text",
      "icon": "text_fields",
      "label": "Text",
      "description": "Enter your name",
      "placeholder": "Enter your name",
      "className": "form-control",
      "subtype": "text",
      "regex": "",
      "handle": true,
    },
    {
      "type": "email",
      "icon": "mail",
      "required": true,
      "label": "Email",
      "description": "Enter your email",
      "placeholder": "Enter your email",
      "className": "form-control",
      "subtype": "text",
      "regex": "^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$",
      "errorText": "Please enter a valid email",
      "handle": true
    },
    {
      "type": "phone",
      "icon": "call",
      "label": "Phone",
      "description": "Enter your phone",
      "placeholder": "Enter your phone",
      "className": "form-control",
      "subtype": "text",
      "regex": "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
      "errorText": "Please enter a valid phone number",
      "handle": true
    },
    {
      "type": "date",
      "icon": "calendar_month",
      "label": "Date",
      "placeholder": "Date",
      "className": "form-control"
    },
    {
      "type": "datetime-local",
      "icon": "calendar_month",
      "label": "Date & Time",
      "placeholder": "Date Time",
      "className": "form-control"
    },
    {
      "type": "textarea",
      "icon": "description",
      "label": "Textarea"
    },
    {
      "type": "checkbox",
      "required": true,
      "label": "Checkbox",
      "icon": "check_box",
      "description": "Checkbox",
      "inline": true,
      "values": [
        {
          "label": "Option 1",
          "value": "option-1"
        },
        {
          "label": "Option 2",
          "value": "option-2"
        }
      ]
    },
    {
      "type": "radio",
      "icon": "radio_button_unchecked",
      "label": "Radio",
      "description": "Radio boxes",
      "values": [
        {
          "label": "Option 1",
          "value": "option-1"
        },
        {
          "label": "Option 2",
          "value": "option-2"
        }
      ]
    },
    {
      "type": "button",
      "icon": "smart_button",
      "subtype": "submit",
      "label": "Button"
    }
  ];

  bodyFields: Array<field> = [
  ];

  body: any = {
    name: 'Form/Document Name',
    description: 'Form/Document Description',
    theme: {
      bgColor: "ffffff",
      textColor: "555555",
      bannerImage: ""
    },
    attributes: this.bodyFields
  };

  value: value = {
    label: "",
    value: ""
  };
  success = false;

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      )
    } else {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      )
    }
  }

  removeField(i: number) {
    const dialogRef = this.dialog.open(ModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bodyFields.splice(i,1);
      }
    });
  }

  toggleValue(item: any) {
    item.selected = !item.selected;
  }

  addValue(values: any) {
    values.push(this.value);
    this.value = { label: "", value: "" };
  }
  submit() { }

}
