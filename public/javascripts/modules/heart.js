import axios from 'axios';
import { $ } from './bling';

function ajaxHeart(e) {
  e.preventDefault();
  axios
    .post(this.action)
    .then(res => {
      const page = window.location.pathname; // selects the current URL
      const isHearted = this.heart.classList.toggle('heart__button--hearted');
      $('.heart-count').textContent = res.data.hearts.length;
      if (isHearted) {
        this.heart.classList.add('heart__button--float');
        setTimeout(() => this.heart.classList.remove('heart__button--float'), 2500);
      } else if (!isHearted && page === "/hearts") { // checks if the current path is the hearts route
          this.heart.classList.remove('heart__button--hearted'); // removes the hearted class
          this.parentNode.parentNode.parentNode.parentNode.remove(); // removes the main parent element of .store
      }
    })
    .catch(console.error);
}

export default ajaxHeart;