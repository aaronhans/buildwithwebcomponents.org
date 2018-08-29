import './_index.scss';
import template from './index.html';
import articleTemplate from './article.html';
import littleCard from '@zaplabs/zap-little-cards';
import data from './data.js';

class ZapLottaCards extends HTMLElement {
  
  connectedCallback() {
    console.log(new Date().getTime())
    let articleHTML = '';
    data.content.forEach( (article) => {
      articleHTML += articleTemplate(article);
    });
    this.innerHTML = template({articles: articleHTML});

    this.querySelectorAll('zap-little-cards').forEach((card,index) => {
      card.article = data.content[index];
      card.setAttribute('datareceived','true');
    });
   }
}
customElements.define('zap-lotta-cards', ZapLottaCards);
