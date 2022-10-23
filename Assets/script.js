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

function jimmyGenoa() {
  //# of batches need user input
  const batches = 1;
  // set amount recipe per batch
  const wine = 9.6;
  const celeryPowder = 23.7;
  const salt = 150;
  const hps = 1.1;
  const spice = 88;
  //total by user input
  const wineTotal = batches * wine;
  const celeryPowderTotal = batches * celeryPowder;
  const saltTotal = batches * salt;
  const hpsTotal = batches * hps;
  const spiceTotal = batches * spice;

  console.log(
    `For ${batches} batches of JJ Genoa need ${wineTotal} wine pounds, ${celeryPowderTotal} pounds of celery powder, ${saltTotal} pounds of salt, ${hpsTotal} pounds of HPS, and ${spiceTotal} pounds of Spice.`
  );
}
getButtonJ.addEventListener("click", jimmyGenoa);

function regularSalame() {
  //# of batches need user input
  const batches = 1;
  // set amount recipe per batch
  const wine = 8;
  const salt = 150;
  const blc = 0.55;
  const llCulture = 0.55;
  const spice = 391.2;
  //total by user input
  const wineTotal = batches * wine;
  const llTotal = batches * llCulture;
  const saltTotal = batches * salt;
  const blcTotal = batches * blc;
  const spiceTotal = batches * spice;

  console.log(
    `For ${batches} batches of Regular Salame need ${wineTotal} wine pounds, ${llTotal} pounds LL2 Culture, ${blcTotal} pounds of BLC ${saltTotal} pounds of salt, and ${spiceTotal} pounds of Spice.`
  );
}
getButtonReg.addEventListener("click", regularSalame);
