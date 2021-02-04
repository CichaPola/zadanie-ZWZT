import { route } from './router';
import home from './templates/home.js';
import logged from './templates/logged.js';


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
        window.location.href='#/success';
      }
    }, (error) => {
      document.getElementById('errorMsg2').innerText="invalid password";
    });
  });
});

route('/success', 'success', function() {});
route('*', '404', function () {});
