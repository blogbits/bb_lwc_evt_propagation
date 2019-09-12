/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';
// game.js
export default class Child extends LightningElement {
    @track n = 0;
    handleClick(evt) {
        console.log('Game Press: ', this.n);
        this.n = this.n + 1;
        evt.stopPropagation();
    }
}
