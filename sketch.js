function setup() {
    createCanvas(900, 900);
  }
  
  function draw() {
    background("rgb(165,60,196)");
    fill("rgb(0,0,0)");
    textSize(64);
    textAlign(CENTER,CENTER);
    
    let maximo = width;
    let minimo = 0;
    //mouseX, 0, width ==> 0, palavra.length
    let palavra = "drama do léo santana";
    let quantidade = map(mouseX, 0, width, 1, palavra.length);
    //console.log(quantidade);
    let parcial = palavra.substring(0,quantidade);
    text(parcial,500,200);
    
    // if(mouseX <50) {
    // let palavra = "C";
    //text(palavra,200,200);
    //}else if (mouseX <100){
    //let palavra = "Ca";
    // text(palavra,200,200);
    //}else{
    //let palavra = "fofo" ;
    // text (palavra,200,200);
    //}
  
  
    
  }