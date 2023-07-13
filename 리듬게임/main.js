fuchtion isJudge(track) {
}


var nowTime = Math.floor(new Date().getTime() / 100);
if (nowTime + 1 >= startTime + song.note[i].time + 30 && startTime + song.note[i].time + 30>= nowTime) {
    combo += 1;
    document.getElementById('combo').innerHTML = 'COMBO: ${combo}';
    document.getElementById('track${track}').style.backgroundColor= 'rgb(200, 200, 200)';
    setTimeout() =>{
    document.getElementById('track${track}').style.backgroundColor = 'black';
    }, 100);
}else{
    combo = 0
    document.getElementById('combo').innerHTML = 'COMBO: ${combo}';
    document.getElementsByClassName('t${i}')[0].remove();
    document.getElementById(`track$(track)`).style.backgroundColor = 'red';
    setTimeout(() => {
        document.getElementById(`track${track}`).style.backgroundColor = 'black';
    }, 100);
}


 window.addEventListener('ketdown', e => {
     let track = e.key.toUpperCase();
     if (document.getElementById('tracktn${track}')) {
         document.getElementById('trackBtn${track}').style.backgroundColor = 'rgb(200,200,200)';
        }
 });

 womdow.addEventListener('keyup', e=> {
     let track = e.key. toUpperCase();
     if (document.getElementById('trackBtn${track}')) {
         document.getElementById('trackBtn${track}').style.backgroundColor = 'black';

     }
 });
document.getElementById('start').style.display = 'none';
setTimeout(() => {
    var audio = new Audio('songs/Beethoven.flac');
    audio.play();
},1300);

startTime = Math.floor(new Date().getTime() / 100);

setInterval(()=> {
},1);

 var nowTime = Math.floor(newDate().getTime() / 100;
 for (let i = 0; i < song.note.length; i++) {
     }  
if (startTime + song.note[i].time == npwTime && ! song.note[i].noted) {

 }

song.note[i].noted = true;

var test = document.createElement('div');
test.classList.add('title');
test.classList.add('t${i}');
document.getElementsByTagName('t${i}')[0]?.remove();
duration: 10000
note: [
    {noted: false, track: 'D', time: 1},
]
