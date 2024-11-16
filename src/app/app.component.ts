import { Component } from '@angular/core';
import { LogUpdateService } from './services/log-update.service';
import { PushNotificationService } from './services/push-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-push';

  constructor(
    private logUpdate: LogUpdateService,
    private pushNotification: PushNotificationService
  ){
  }

  ngOnInit(){
    this.logUpdate.suscribe();
    this.pushNotification.subscribeToNotifications();
    this.pushNotification.listenForNotifications();
  }
}
