var app = new Vue({
    el: '#app',
    data: {
      list:['りんご','ばなな','いちご'],
      message:'めっせ',
      show: true,
      val: '1234',
      classObject: {
        child: true,
        'is-active': true
      },
      styleObject: {
        color: 'red',
        backgroundColor: 'lightgray'
      },
      item: {
        id: 1,
        src: 'item1.jpg',
        alt: '商品１サムネイル',
        width: 200,
        height: 200
      },
      radius:50,
    },
    methods: {
      handleClick: function(event){
        app.show = !app.show
      }
    }
})
app.list.push('オレンジ')
console.log(app.message)
