const words={
  'hedge': 'JUM1JUJDeXdvcCVDNSU4Mm90', 
  'bench': 'JUM1JTgyYXdrYQ==', 
  'gallop': 'Y3dhJUM1JTgy', 
  'mosquito': 'a29tYXI=', 
  'pincers': 'b2JjJUM0JTk5Z2k=', 
  'hut': 'c3phJUM1JTgyYXM=', 
  'cone': 'c3p5c3prYQ==', 
  'dragonfly': 'd2ElQzUlQkNrYQ==', 
  'locomotive': 'bG9rb21vdHl3YQ==',
  //'cGFyb3clQzMlQjN6' 
  'grapes': 'd2lub2dyb25h',
  'cutlery':'c3p0dSVDNCU4N2Nl'
};

Object.keys(words).forEach(function(key) {
  words[key]=b64_to_utf8(words[key]);
});

const words_length=Object.keys(words).length;
let x=[];
let i;
let lang;
let lang_set;
let j=0;
let output;

let seconds=21;
let delta=0;

let loop;
let win;
let submit=false;
/*
function utf8_to_b64(str) {
  return btoa(encodeURIComponent((str)));
}
*/
function b64_to_utf8(str) {
  return decodeURIComponent(atob(str));
}

function draw(e){
  //e.preventDefault();
    //className = ""
    //result.innerHTML='';
    button.disabled=true;
    result.style.display='none';
    //result.classList.remove('result');
    i=Math.floor(Math.random()*words_length);
    //lang=Math.floor(Math.random()*2);
    x.push(i);
    if (x[j-2]!==undefined && x[j]===x[j-1]) i=x[j-2];  
    j++;
    

  console.log(x);
  console.log(lang);
  //if (x[j]===x[j-1]) console.log('REPEAT');
  //j++;
 // if (lang) game.innerHTML=Object.keys(words)[i];
  //else 
  game.innerHTML=Object.keys(words)[i];
  photo.innerHTML='<img class=\'photo\'src='+i+'.jpg>';
  //if Object.keys(words)
  console.log(e.target.value);

}

function word_check(e) {
  e.preventDefault();
  const word=e.target.elements[0].value;
  console.log(e.target.elements[0].value);
  result.style.display='flex';
  //form.reset();
  //if (lang) lang_set=Object.values(words)[i];
  //else lang_set=Object.keys(words)[i];
  //console.log(lang_set);
  if (!win && word.toLowerCase()===Object.values(words)[i] && seconds>0 && 
  seconds<21) { 
    //console.log(Object.values(words)[i]);
    time_handler.innerText='';
    clearInterval(loop); 
    output='SUCCESS';
    //result.classList.add('success');
    result.style.color='green';
    win=true;
    seconds=21;
  }
    else 
    { 
      if (win) { win=false; 
        //form.reset();
        return; 
      }
      output='FAIL';
      result.style.color='red';
      //result.classList.add('fail');
  
      time_handler.innerText='';
      clearInterval(loop);
      //win=false;
      seconds=21;
    }
  result.innerText=output;
  button.disabled=false;
  
}

function counter() {
    seconds-=delta;
    time_handler.innerText='time for answer: '+seconds;
    time_handler.style.color='black';
    if (seconds<1)  { 
      clearInterval(loop); 
      time_handler.innerText='TIMEOUT!';
      time_handler.style.color='magenta';
      seconds=21;
      button.disabled=false;
    }
    
    //console.log(seconds);
    
    console.log('hello from counter()')
}

function change() {
    if (delta===0) delta=1;
    //if (seconds<21) e.stopPropagation();
    if (seconds===21) loop=setInterval(counter,1000);
    console.log('hello from change()')
}

const button=document.querySelector('button');
console.log(button);
const game=document.querySelector('.draw');
console.log(game);
const photo=document.querySelector('.photo');
const form = document.querySelector('form[name="game"]');
//const word=document.querySelector('input[name="word"]');
//console.log(word)
const result=document.querySelector('.result');
const time_handler=document.querySelector('.time');

button.addEventListener('click', change);
button.addEventListener('click', draw);
form.addEventListener('submit',word_check);