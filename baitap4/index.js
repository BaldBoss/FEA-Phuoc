let el = document.getElementById("height-transition");
const img = new Image();
let imgHeight;
// using el.scrollheight khong tra lai img height. nen phai dung funtion kiem tra duong link cua img
// lay height img tren duong link roi. roi dan vao el.scrollheight
img.onload = function() {
  imgHeight = this.height;
  console.log(imgHeight)
  let height = el.scrollHeight;
el.style.setProperty('--max-height', height + 'px');
}
img.src = 'https://picsum.photos/id/1060/800/480.jpg';

