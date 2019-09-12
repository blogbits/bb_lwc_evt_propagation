/* eslint-disable no-console */
import { LightningElement } from 'lwc';

export default class GrandParent extends LightningElement {
    handleClickGrandParent(evt) {
        console.log('Grand-Parent ' + evt.target.name);
        console.log(evt.target);
    }
}
