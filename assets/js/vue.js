var app = new Vue({
  el: '#app',
  data: {
    massage: `Вы загрузили страницу в ${new Date().toLocaleString()}`,
    seen: false,
    todoo: [
        {text: 'Изучить JavaScript'},
        {text: 'Изучить Vue'},
        {text: 'Сделать что то крутое!'},
    ]
  }
})