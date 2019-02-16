'use strict';

let items = document.querySelectorAll('.items .item');

function activeItem() {
  this.classList.toggle('active');
}

setInterval(function() {
  let rand = mtRand(0, items.length - 1);

  activeItem.call(items[rand]);
}, 500);


function mtRand(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}


/**
 * second example
*/


let div = document.querySelector('.timer .time');
let timer = new Timer(4, div);
let startTimer = setInterval( timer.tick.bind(timer), 1000 );

function Timer(time, elem) {
  this.time = time;
  this.elem = elem;

  this.tick = function() {
    this.time--;
    this.elem.innerHTML = this.time;
    this.stop();
  };

  this.stop = function() {
    if ( this.time === 0 ) {
      clearInterval(startTimer);
    }
  }
}


/**
 * third example
 */
// var user = {
//   firstName: 'Danylo',
//   sayHi: function(who) {
//     alert( `${this.firstName}: Hello, ${who}!` );
//   }
// };

// setTimeout(user.sayHi.call(user, 'John'), 1000);






