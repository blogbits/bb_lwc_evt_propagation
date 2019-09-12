/* eslint-disable no-console */
import { LightningElement } from 'lwc';

export default class GreatGrandParent extends LightningElement {
    handleClickGreatGrandParent(evt) {
        console.log('Great Grand Parent ' + evt.target.name);
        console.log(evt.target);
    }
}
