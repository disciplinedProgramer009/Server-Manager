import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { ServerStatus } from './dashboard/server-status/server-status';
import { Tarffic } from "./dashboard/tarffic/tarffic";
import { Tickets } from './dashboard/tickets/tickets';
import { DashboardItem } from "./dashboard/dashboard-item/dashboard-item";

@Component({
  selector: 'app-root',
  imports: [Header, ServerStatus, Tarffic, Tickets, DashboardItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('server-data-monitor');

}
