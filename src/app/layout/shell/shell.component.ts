import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LeftPanelComponent } from '../left-panel/left-panel.component';
import { ChatContainerComponent } from '../chat-container/chat-container.component';
import { RightPanelComponent } from '../right-panel/right-panel.component';

@Component({
  selector: 'app-shell',
  imports: [HeaderComponent, LeftPanelComponent, ChatContainerComponent, RightPanelComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.css'
})
export class ShellComponent {

}
