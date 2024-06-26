import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Chart } from 'chart.js';
import { Subscription } from 'rxjs';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  private subscription: Subscription;
  showHeader: boolean = true;

  constructor(
    private toastr: ToastrService,
    private headerService: HeaderService
  ) {
    this.subscription = this.headerService.showHeader$.subscribe(showHeader => {
      this.showHeader = showHeader;
    });
  }

  ngAfterViewInit() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        onClick: (event, elements) => {
          if (elements.length) {
            this.onChartClick();
          }
        }
      }
    });
  }
 
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  showSuccess(message: string) {
    this.toastr.error(message);
  }

  onChartClick() {
    this.showSuccess('Not Authorized Login to the Application');
  }

  onRateAlertClick() {
    this.showSuccess('Not Authorized Login to the Application');
  }

  onMarginClick() {
    this.showSuccess('Not Authorized Login to the Application');
  }
}
