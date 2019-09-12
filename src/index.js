import { createElement } from 'lwc';
import App from 'pad/app';

const app = createElement('the-app', { is: App });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);
