/* Simple is Jimmy John Genoa
Per Individual Batch
Wine 9 lbs
Celery Powder 23.7 lbs.
Salt 150 lbs
HPS 1.1 lbs
Spice 88 lbs
*/

var getButtonJ = document.getElementById("j-genoa");
var getButtonReg = document.getElementById("r-sal");
var getButtonLight = document.getElementById("l-sal");
var getButtonChub = document.getElementById("c-hub");
var getButtonPepper = document.getElementById("p-sal");
var getButtonAsal = document.getElementById("a-sal");
var getButtonBurn = document.getElementById("nb-sal");
var getButtonRoni = document.getElementById("r-pepp");
var getButtonAroni = document.getElementById("an-pepp");
var getButtonLast = document.getElementById("b-oa");
let numOfbatches = document.getElementById("num-batches");
let fbatch = numOfbatches.value;

//function finalBatches() {
//let fbatch = numOfbatches.value;
//if (fbatch > 0);
//console.log(fbatch);
//}

//getButtonLast.addEventListener("click", finalBatches);

function jimmyGenoa() {
  let fbatch = numOfbatches.value;

  //# of batches need user input
  //let batches = finalBatches();
  // set amount recipe per batch
  const wine = 9.6;
  const celeryPowder = 23.7;
  const salt = 150;
  const hps = 1.1;
  const spice = 88;
  //total by user input
  let wineTotal = fbatch * wine;
  let celeryPowderTotal = fbatch * celeryPowder;
  let saltTotal = fbatch * salt;
  let hpsTotal = fbatch * hps;
  let spiceTotal = fbatch * spice;

  document.querySelector("#a-a").textContent = fbatch;
  document.querySelector("#a-b").textContent = wineTotal;
  document.querySelector("#a-c").textContent = saltTotal;
  document.querySelector("#a-d").textContent = spiceTotal;
  document.querySelector("#a-e").textContent = celeryPowderTotal;
  document.querySelector("#a-f").textContent = hpsTotal;

  console.log(
    `For ${fbatch} batches of JJ Genoa need ${wineTotal} wine pounds, ${celeryPowderTotal} pounds of celery powder, ${saltTotal} pounds of salt, ${hpsTotal} pounds of HPS, and ${spiceTotal} pounds of Spice.`
  );
}

//getButtonLast.addEventListener("click", finalBatches);
getButtonJ.addEventListener("click", jimmyGenoa);

function regularSalame() {
  let fbatch = numOfbatches.value;
  //# of batches need user input
  //const batches = 1;
  // set amount recipe per batch
  const wine = 8;
  const salt = 150;
  const cure = 11.25;
  const blc = 0.552;
  const llCulture = 0.55;
  const spice = 391.2;
  //total by user input
  let wineTotal = fbatch * wine;
  let cureTotal = fbatch * cure;
  let llTotal = fbatch * llCulture;
  let saltTotal = fbatch * salt;
  let blcTotal = fbatch * blc;
  let spiceTotal = fbatch * spice;

  document.querySelector("#b-a").textContent = fbatch;
  document.querySelector("#b-b").textContent = wineTotal;
  document.querySelector("#b-k").textContent = cureTotal;
  document.querySelector("#b-c").textContent = saltTotal;
  document.querySelector("#b-d").textContent = blcTotal;
  document.querySelector("#b-e").textContent = llTotal;
  document.querySelector("#b-f").textContent = spiceTotal;

  console.log(
    `For ${fbatch} batches of Regular Salame need ${wineTotal} wine pounds, ${llTotal} pounds LL2 Culture, ${blcTotal} pounds of BLC ${saltTotal} pounds of salt, and ${spiceTotal} pounds of Spice.`
  );
}
getButtonReg.addEventListener("click", regularSalame);

function retailPepperoni() {
  let fbatch = numOfbatches.value;

  //# of batches need user input
  //let batches = finalBatches();
  // set amount recipe per batch
  const cure = 11.25;
  const liquidSpice = 12.6;
  const salt = 100;
  const hps = 1.1;
  const spice = 130.2210;
  //total by user input
  let cureTotal = fbatch * cure;
  let liquidSpicetotal = fbatch * liquidSpice;
  let saltTotal = fbatch * salt;
  let hpsTotal = fbatch * hps;
  let spiceTotal = fbatch * spice;

  document.querySelector("#g-a").textContent = fbatch;
  document.querySelector("#g-b").textContent = cureTotal;
  document.querySelector("#g-c").textContent = saltTotal;
  document.querySelector("#g-d").textContent = spiceTotal;
  document.querySelector("#g-f").textContent = liquidSpicetotal;
  document.querySelector("#g-g").textContent = hpsTotal;

 
}

getButtonRoni.addEventListener("click", retailPepperoni);


function apepperoni() {
  let fbatch = numOfbatches.value;

  //# of batches need user input
  //let batches = finalBatches();
  // set amount recipe per batch

  const celeryPowder = 17.01
  const salt = 100;
  const hps = 1.1;
  const spice = 116.1630;
  //total by user input
  
  let celeryPowderTotal = fbatch * celeryPowder;
  let saltTotal = fbatch * salt;
  let hpsTotal = fbatch * hps;
  let spiceTotal = fbatch * spice;

  document.querySelector("#p-a").textContent = fbatch;
  document.querySelector("#p-c").textContent = saltTotal;
  document.querySelector("#p-d").textContent = spiceTotal;
  document.querySelector("#p-e").textContent = celeryPowderTotal;
  document.querySelector("#p-f").textContent = hpsTotal;
}

getButtonAroni.addEventListener("click", apepperoni);