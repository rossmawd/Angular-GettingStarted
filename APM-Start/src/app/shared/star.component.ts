import { OnChanges, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
selector: 'pm-star',
templateUrl: './star.component.html',
styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    //think of the input and ouput properties as the public API of the nested 
    //component
   @Input() rating: number;
    starWidth: number = 75;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick(){
        console.log('clicky wicky')
        this.ratingClicked.emit(this.rating.toString())
    }


    ngOnChanges(): void {
        console.log('ch cha changes')
        this.starWidth = this.rating * 75/5;
    }
}