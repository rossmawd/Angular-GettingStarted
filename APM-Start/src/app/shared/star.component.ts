import { OnChanges, Component, Input } from '@angular/core';

@Component({
selector: 'pm-star',
templateUrl: './star.component.html',
styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
   @Input() rating: number = 4;
    starWidth: number = 75;


    ngOnChanges(): void {
        console.log('ch cha changes')
        this.starWidth = this.rating * 75/5;
    }
}