const words={
    'hedge': 'żywopłot',
    'bench': 'ławka',
    'gallop':'cwał',
    'mosquito':'komar',
    'pliers':'kombinerki',
    'hut':'szałas'
}

const words_length=Object.keys(words).length;
let x=[];
let i;
let j=0;
let output;

let seconds=11;
let delta=0;

let loop;

function draw(e){
  //e.preventDefault();
    
    i=Math.floor(Math.random()*words_length);
    x.push(i);
    if (x!==undefined && x[j]===x[j-1]) i=x[j-2];  
    j++;
    

  console.log(x);
  //if (x[j]===x[j-1]) console.log('REPEAT');
  //j++;
  game.innerHTML=Object.keys(words)[i];
  photo.innerHTML='<img class=\'photo\'src='+i+'.jpg>';
  //if Object.keys(words)
  console.log(e.target.value);

}

function word_check(e) {
  e.preventDefault();
  const word=e.target.elements[0].value;
  console.log(e.target.elements[0].value);
  //form.reset();
  if (word===Object.values(words)[i] && seconds>0 && 
  seconds<11) { 
    time_handler.innerText='';
    clearInterval(loop); 
    output='SUCCESS';
    result.style.color='green';
   // fail=true;
    seconds=11;
  }
    else 
    {
      output='FAIL';
      result.style.color='red';
      
      time_handler.innerText='';
      clearInterval(loop);
     // fail=false;
      seconds=11;
    }
  result.innerText=output;
  
  //result.classList.add('fail');
}

function counter() {
    seconds-=delta;
    time_handler.innerText='time for answer: '+seconds;
    time_handler.style.color='black';
    if (seconds<1)  { 
      clearInterval(loop); 
      time_handler.innerText='TIMEOUT!';
      time_handler.style.color='magenta';
      seconds=11;
    }
    
    //console.log(seconds);
    
    console.log('hello from counter()')
}

function change() {
    if (delta===0) delta=1;
    if (seconds===11) loop=setInterval(counter,1000);
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