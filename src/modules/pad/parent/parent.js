/* eslint-disable no-console */
import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    handleClickParent(evt) {
        console.log('Parent ' + evt.target.name);
        console.log(evt.target);
    }
}
