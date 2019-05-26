document.addEventListener('DOMContentLoaded',function(){
  window.app = new Vue()
})
var app = new Vue({
    el: '#app',
    data: {
      message:'hello Vue.js!'
    }
})
console.log(app.message)
