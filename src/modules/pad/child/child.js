/* eslint-disable no-console */
import { LightningElement, api } from 'lwc';

export default class Child extends LightningElement {
    @api name = 'default';
    handleClick(evt) {
        console.log('Child Press: ', this.name);
        console.log(evt.target);
    }
}
