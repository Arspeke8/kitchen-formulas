/* Simple is Jimmy John Genoa
Per Individual Batch
Wine 9 lbs
Celery Powder 23.7 lbs.
Salt 150 lbs
HPS 1.1 lbs
Spice 88 lbs
*/

var getButton = document.getElementById("get-button");
var recipeGenoa = document.getElementById("j-genoa");

function jimmyGenoa() {
  //# of batches need user input
  const batches = 27;
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
//getButton.addEventListener("click", jimmyGenoa);

getButton.addEventListener("click", jimmyGenoa);
