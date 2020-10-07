"use strict";

var app = new Vue({
  el: '#app',
  data: {
    massage: "\u0412\u044B \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0432 ".concat(new Date().toLocaleString()),
    seen: false,
    todoo: [{
      text: 'Изучить JavaScript'
    }, {
      text: 'Изучить Vue'
    }, {
      text: 'Сделать что то крутое!'
    }]
  }
});