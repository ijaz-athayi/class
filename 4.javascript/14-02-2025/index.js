let count =0;
let changes = 0;
const acclick = () => {
  count++;
  console.log(count);
  updated();
}
const dcclick = () => {
  count--;
  console.log(count);
    updated();
}
const updated = () => {
  document.getElementById("welcome").innerHTML+= count + "";
}

const inputchange = () => {
  changes++;
  console.log(changes);
  changesupdate();
}

const changesupdate = () => {
    document.getElementById("welcomee").innerHTML = changes;

}



// document.write(count);


















// count = 0;

// const increment = () => {
//     count++;
//     console.log(count);
// }
  
// let value = document.getElementById('count');
// value.innerHTML = count;