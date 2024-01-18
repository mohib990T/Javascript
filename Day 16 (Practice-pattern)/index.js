// let star = "";
// for (let i = 1; i <= 5; i++) {
//     star += "* ";
//     console.log(star);
// }

// let num = "";
// for (let i = 1; i <= 8; i++) {
//     num += i + " ";
//     console.log(num);
// }

for (let i = 0; i < 5; i++) {
  //spaces
  let str = "";
  for (let s = 1; s <= 4 - i; s++) {
    str = str + " ";
  }

  //stars
  for (let j = 0; j <= i; j++) {
    str = str + "*";
  }
  console.log(str);
}


