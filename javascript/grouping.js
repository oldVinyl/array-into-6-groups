const arr = [ " * ", " * ", " * ", " * ", " * ", " G1 end ", " * ", " * ", " * ", " * ", " * ", " G2 end ", " * ", " * ", " * ", " * ", " * ", " G3 end ", " * ", " * ", " * ", " * ", " * ", " G4 end ", " * ", " * ", " * ", " * ", " * ", " G5 end ", " * ", " * ", " * ", " * ", " * ", " G6 end " ];

let groupings = [[], [], [], [], [], []];
let x = 0;

for (let i = 0; i < 6; i++) {

  while (groupings[i].length < 6) {
    if (arr[x]){
      groupings[i].push(arr[x]);
      x += 1 ;
    } else {
      break;
    }  
  }

  // console.log(`Group ${i + 1} : ${groupings[i]}`); // output as a string
  console.log(`Group ${ i + 1} : `, groupings[i]); // output as an object
}
