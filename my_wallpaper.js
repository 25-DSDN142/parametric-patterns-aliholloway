//your parameter variables go here!
let sheepFurSize = 35;
let cheekPosY = 118;
let cheekSize = 4;

let sheepFurSizeThreshold = 30; // background color changes


//let purple = color(205, 139, 224); // line 
//let pink = color(240, 156, 188); // line 
//let blue = color(128, 206, 255); // line
//let green = color(157, 237, 162); // line 
//let white = color(255); // line 
//let sheepCol = blue; // line
let mouthSize = 1;

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

 
  
  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;


}

function wallpaper_background() {
  // colors
  let purple = color(205, 139, 224);
  let pink = color(240, 156, 188);
  let blue = color(128, 206, 255);
  let green = color(157, 237, 162);
  let white = color(255);
  let indigo = color(75, 0, 130);
  let darkBlue = color(9, 1, 122);
  let limeGreen = color(162, 191, 120);
  let lightBlue = color(120, 173, 191);
  let sunsetOrange = color(242, 118, 90);

  if (sheepFurSize > sheepFurSizeThreshold) {
    background(green);
    //background(200, 230, 255); // light blue background
  } else {
    background(240, 255, 240); //light honeydew green colour
  }
}


function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  // colors
  let purple = color(205, 139, 224);
  let pink = color(240, 156, 188);
  let blue = color(128, 206, 255);
  let green = color(157, 237, 162);
  let white = color(225);
  let indigo = color(75, 0, 130);
  let darkBlue = color(9, 1, 122);
  let limeGreen = color(162, 191, 120);
  let lightBlue = color(120, 173, 191);
  let sunsetOrange = color(242, 118, 90);  


  let sheepCol = white;





  
  //--------- PLAID - START ----------------------------------------------
  // parameters
  let cell_width = 200.0;
  let cell_height = 200.0;

  let num_stripe_rows = 6;  // even numbers match cell alignment 
  let num_stripe_cols = 6;  // even numbers match cell alignment 

  let stripe_width = cell_width / num_stripe_cols;   // width -> cols -> vertical
  let stripe_height = cell_height / num_stripe_rows;  // hieght -> rows -> horizontal

  
  

  
  noStroke();
  // draw horizontal stripes (rows)
  blue.setAlpha(100); // set alpha 
  fill(blue);
  for (let i = 0; i <= num_stripe_rows; i++) {  // iterations: 0, 1, 2, 3, 4, 5
    if (i % 2 == 1) {   // odd
      rect(0, stripe_height * i, cell_width, stripe_height)  // rect(x, y, width, height) -> (x, y) is top-left corner of rectangle  
    }
  }
  blue.setAlpha(255); // set alpha back to full opacity

  // draw vertical stripes
  pink.setAlpha(100); // set alpha 
  fill(pink);
  for (let i = 0; i <= num_stripe_cols; i++) {  // iterations: 0, 1, 2, 3, 4, 5
    if (i % 2 == 1) {   // odd
      rect(stripe_width * i, 0, stripe_width, cell_height)  // rect(x, y, width, height) -> (x, y) is top-left corner of rectangle  
    }
  }
  //pink.setAlpha(255); // set alpha back to half opacity


  //--------- PLAID - END ----------------------------------------------
    
  
  
  




  
/*

    let line_length = 100;
    let line_width = 10;
    let y_offset = line_length * 0.5; // 100
    let x_offset = 0;  // 5
    
    let x1 = 0;
    let y1 = 0;
    let x2 = 0;
    let y2 = line_length; 
    
    
    // transform --- start -----
    translate(100, 100);  // center of cell is the pivot
    rotate(30);
    //-------
    stroke(25, 56, 12);
    strokeWeight(line_width);
    line(x1, y1 - y_offset, x2, y2 - y_offset);
    // transform --- end -----

    // unwinds for downstream code
    rotate(-30);
    translate(-100, -100);
    */




    //--------  SHEEP BODY -----------------------------------------

    //sheep body fur
    noStroke();
    fill(sheepCol);
    ellipse(100,100,sheepFurSize,sheepFurSize);
    ellipse(120,105,sheepFurSize,sheepFurSize);
    ellipse(127,123,sheepFurSize,sheepFurSize);
    ellipse(115,135,sheepFurSize,sheepFurSize);
    ellipse(97,137,sheepFurSize,sheepFurSize);
    ellipse(80,130,sheepFurSize,sheepFurSize);
    ellipse(80,109,sheepFurSize,sheepFurSize);

    //sheep fur filler
    ellipse(102,120,50,25); 

    //---------------------------------------------------------------

    
 
     noStroke(); //black

    //---------- SHEEP HEAD -------------------------------------------

    //sheep head
    fill(247, 220, 193); //beige
    ellipse(114,117,30,24);

    //sheep ears
    ellipse(100,108,15,5); //left ear
    ellipse(127,108,15,5); //right ear

    //sheep eyes
    fill(0); //black
    ellipse(110,113,2,5); //left eye
    ellipse(119,113,2,5); //right eye

    //sheep nose
    ellipse(115,118,4,2);

    //sheep cheeks
    fill(240, 156, 188); //pink
    ellipse(105,cheekPosY,cheekSize,cheekSize);
    ellipse(124,cheekPosY,cheekSize,cheekSize);

    //sheep mouth
    noFill();
    stroke(0); //black
    strokeWeight(mouthSize);
    arc(115,121,10,6,0,180); 
    
    // ------------ SHEEP LEGS / FEET ---------------------------------
    //sheep legs
    noStroke();
    fill(sheepCol); 
    rect(83,141,7,25); //left leg
    rect(118,141,7,25) //right leg0

    //sheep feet
    fill(0); //black
    rect(83,160,7,6); //left hoof
    rect(118,160,7,6); //right hoof


    }
  