// function SetInitial(){
//   for (var i=0; i<30; i++){
//     var bg = document.getElementById('bubble-background')
//     var div = document.createElement("div");
//     div.className = 'bubble'
//     div.setAttribute('id', i);
  
//     var img = document.createElement('img');
//     img.src = './'+i%4+'.png';
//     div.appendChild(img);
//     div.style.top= Math.random()*800+"px";
//     div.style.left= Math.random()*1200+"px";
//     bg.appendChild(div);
//   }
// }

// function callibration(num, thread){
//   if (num< -200){
//     return 0;
//   }
//   else if (num>thread+100){
//     return thread;
//   }
//   else{
//     return num;
//   }
// }

// function update(top_delta,left_delta){
//   var height = window.innerHeight;
//   var width = window.innerWidth;
//   for (var i=0;i<30;i++){
//     var bubble = document.getElementById(i);
//     left_int = Number(bubble.style.left.replace('px',''));
//     top_int = Number(bubble.style.top.replace('px',''));
//     left_int = callibration(left_int, width);
//     top_int = callibration(top_int, height);
//     bubble.style.left = (left_int+left_delta[i])+"px";
//     bubble.style.top = (top_int+top_delta[i])+"px";
//   }
// }
// function updates(){
//   top_delta=[]
//   left_delta=[]
//   for (var i=0;i<30;i++){
//     top_delta.push(Math.random()*20-10);
//     left_delta.push(Math.random()*20-10);
//   }
//   for (var i=0;i<8;i++){
//     setTimeout(update, 100, top_delta,left_delta);
//   }
// }

// SetInitial();
// setInterval(updates, 800);