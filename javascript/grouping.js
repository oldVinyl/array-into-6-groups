//instructions
alert(`To input your list, you can:

1. Just click the button to activate prompts (Press " 0 " to end), OR

2. Type in the text box and separate by a comma: ' , '. Then click the button.")`);


//variables
let arr = [];
let groupings = [[], [], [], [], [], []];
let x = 0;
let input = document.getElementById("textBox").value;

//constants
const btn = document.getElementById("btn");

//event listeners
btn.addEventListener('click', () => document.getElementById("textBox").value ? split() : start());
document.addEventListener('keypress', (e) => {
  if (e.key == "Enter") { 
    split();
  }
});

//functions
function start () { //get prompts
  for (let i = 0; i < 36; i++){
    let name;
    name = prompt(`Enter name [${i+1}/ 36] : \nEnter " 0 " to exit!!!`);
    if (name != "0") {
      arr.push(name);
    } else {
      break;
    }
  }
  sorter(arr);
}

function split () {
  const text = document.getElementById("textBox").value;
  const names = text.split(",");
  for (let i = 0; i < names.length; i++){
    arr.push(names[i]);
  }
  sorter(arr);
}

function sorter() { //sorts arr into groups
  for (let i = 0; i < 6; i++) {

    while (groupings[i].length < 6) {
      if (arr[x]){
        groupings[i].push(arr[x]);
        x += 1 ;
      } else {
        break;
      }  
    }
  
    console.log(`Group ${i + 1} : ${groupings[i]}`); // 
  } 
}