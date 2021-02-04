import { route } from './router';
import home from './templates/home.js';

route('/', 'home', function() {
  this.$on('.submit', 'click', () => {

    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    const data = {
      username: username,
      password: password, 
    }
    axios({
      method: 'post',
      url: 'https://zwzt-zadanie.netlify.app/api/login',
      data: data
    })
    .then((response) => {
      if(!username || !password) {
        if(!username) {
          document.getElementById('errorMsg1').innerText="fill in the field above";
        }
        if(!password) {
          document.getElementById('errorMsg2').innerText="fill in the field above";
        }
      }
      else {
        window.location.href='#/ex1';
      }
    }, (error) => {
      document.getElementById('errorMsg2').innerText="invalid password";
    });
  });
});

route('/ex1', 'example1', function() {
  this.title = 'Example 1';
});

route('/ex2', 'example2', function() {
  this.title = 'Example 2';
  this.counter = 0;
  this.$on('.my-button', 'click', () => {
    this.counter += 1;
    this.$refresh();
  });
});

route('*', '404', function () {});
