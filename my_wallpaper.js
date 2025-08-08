 // parameters
 /*
 //------ COLOR PARAMETERS - START ---------- lines 185 to 198 ---------------------------------------
  let color_alpha = 85;  // controls plaid's opacity
  // choose color combination
  let is_stripe_color_PBG = true;  // design 4
  let is_stripe_color_GGW = false;  // design 2
  let is_stripe_color_ORB = false;  // design 3
  let is_stripe_color_ROY = false;  // design (didn't use)
  let is_stripe_color_PCB = false;  // design 5
  let is_stripe_color_PLP = false;  // design 6
  let is_stripe_color_CSB = false;  // design 7
  let is_stripe_color_BGC = false;  // design 8
  let is_stripe_color_BYO = false;  // design 9, design 1

  //------ COLOR PARAMETERS - END -------------------------------------------------

  //------ PLAID DIMENSIONS PARAMETERS - START ----------- lines 201 to 203 --------------------------------------
  let num_stripe_rows = 6;  // even numbers that are multiple of 3 -> match cell alignment   |   2 (one olor - big), 3 (one color smaller), 4 (two colors)
  let num_stripe_cols = 6;  // even numbers that are multiple of 3 -> match cell alignment
  let cell_size = 200.0;  // no less than 200 recommended; 200 (three colors - standard) - 250 (thick and thin) - 300 (two colors) - 400 (one color - big)
  
  //------ PLAID DIMENSIONS PARAMETERS - END -------------------------------------------------
*/



/* 
// ---------- SHEEP PARAMETERS - START -------- lines 307 to 322 ------------------------------------------------
// sheep size
let sheepFurSize = 38;
let cheekSize = 5.5;
let mouthSize = 0.9;


// sheep color
let sheepCol = color(pink);


// sheep position
let sheep_pos_x = -153.0;
let sheep_pos_y = -173.0;

// ---------- SHEEP PARAMETERS - END --------------------------------------------------------
*/





function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
 
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print


 
  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}


function wallpaper_background() {


// set background color
  background(127);  
}




function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
    // colors
  let primary_red = color(255, 0, 0);
  let primary_yellow = color(255, 255, 0);
  let primary_blue = color(0, 0, 255);


  let red = color(255, 128, 128);
  let purple = color(205, 139, 224);
  let pink = color(240, 156, 188);
  let blue = color(128, 206, 255);
  let green = color(132, 255, 128);
  let white = color(225);
  let indigo = color(75, 0, 130);
  let darkBlue = color(9, 1, 122);
  let limeGreen = color(162, 191, 120);
  let lightBlue = color(120, 173, 191);
  let sunsetOrange = color(242, 118, 90);
 
   
  let PBG_purple = color(135, 128, 238);
  let PBG_blue = color(140, 186, 226);
  let PBG_green = color(132, 207, 197);


  let GGW_purple = color(62, 54, 63);
  let GGW_green_light = color(183, 180, 72);
  let GGW_green_dark = color(108, 121, 49);
  let GGW_white = color(254, 252, 234);


  let ORB_black = color(25, 24, 10);
  let ORB_orange = color(175, 67, 25);
  let ORB_rust = color(119, 32, 20);
  let ORB_brown = color(63, 34, 15);


  let ROY_cream = color(250, 240, 202);
  let ROY_red = color(249, 87, 56);
  let ROY_orange = color(238, 150, 75);
  let ROY_yellow = color(244, 211, 94);


  let PCB_black = color(15, 15, 15);
  let PCB_pink = color(247, 86, 124);
  let PCB_cream = color(255, 250, 227);
  let PCB_blue = color(153, 225, 217);


  let PLP_violet = color(156, 137, 184);
  let PLP_pink = color(240, 166, 202);
  let PLP_lavender = color(239, 195, 230);
  let PLP_purple = color(184, 190, 221);


  let CSB_gray = color(57, 92, 107);
  let CSB_cream = color(230, 225, 197);
  let CSB_sage = color(212, 203, 146);
  let CSB_blue = color(128, 164, 237);


  let BGC_purple = color(75, 63, 114);
  let BGC_blue = color(31, 32, 65);
  let BGC_green = color(65, 123, 90);
  let BGC_cream = color(208, 206, 186);




  let BYO_blue_dark = color(30, 56, 136);
  let BYO_blue = color(71, 168, 189);
  let BYO_yellow = color(245, 230, 99);
  let BYO_orange = color(255, 173, 105);
 
  // plaid stripe colors
  let stripe_color3 = [white, white, white, white]; // background_color -> index = 0
 
  // color combinations | [background, color1, color1, color3]
  let stripe_color_PBG = [white, PBG_purple, PBG_blue, PBG_green];
  let stripe_color_GGW = [GGW_purple, GGW_green_light, GGW_green_dark, GGW_white];
  let stripe_color_ORB = [ORB_black, ORB_orange, ORB_rust, ORB_brown];
  let stripe_color_ROY = [ROY_cream, ROY_red, ROY_orange, ROY_yellow];
  let stripe_color_PCB = [PCB_black, PCB_pink, PCB_cream, PCB_blue];
  let stripe_color_PLP = [PLP_violet, PLP_pink, PLP_lavender, PLP_purple];
  let stripe_color_CSB = [CSB_gray, CSB_cream, CSB_sage, CSB_blue];
  let stripe_color_BGC = [BGC_purple, BGC_blue, BGC_green, BGC_cream];
  let stripe_color_BYO = [BYO_blue_dark, BYO_blue, BYO_yellow, BYO_orange];

  //------ color parameters - start -------------------------------------------------
  let color_alpha = 85;
  // choose color combination
  let is_stripe_color_PBG = true;  // design 4
  let is_stripe_color_GGW = false;  // design 2
  let is_stripe_color_ORB = false;  // design 3
  let is_stripe_color_ROY = false;  // design (didn't use)
  let is_stripe_color_PCB = false;  // design 5
  let is_stripe_color_PLP = false;  // design 6
  let is_stripe_color_CSB = false;  // design 7
  let is_stripe_color_BGC = false;  // design 8
  let is_stripe_color_BYO = false;  // design 9, design 1

  //------ color parameters - end -------------------------------------------------

  //------ plaid dimensions parameters - start -------------------------------------------------
  let num_stripe_rows = 6;  // even numbers that are multiple of 3 -> match cell alignment   |   2 (one olor - big), 3 (one color smaller), 4 (two colors)
  let num_stripe_cols = 6;  // even numbers that are multiple of 3 -> match cell alignment
  let cell_size = 200.0;  // no less than 200 recommended; 200 (three colors - standard) - 250 (thick and thin) - 300 (two colors) - 400 (one color - big)
  
  //------ plaid dimensions parameters - end -------------------------------------------------


  // calculate stripe size
  let stripe_width = cell_size / num_stripe_cols;   // width -> cols -> vertical
  let stripe_height = cell_size / num_stripe_rows;  // hieght -> rows -> horizontal



  if (is_stripe_color_PBG) {
    stripe_color3 = stripe_color_PBG;
  }
  else if (is_stripe_color_GGW) {
    stripe_color3 = stripe_color_GGW;
  }
  else if (is_stripe_color_ORB) {
    stripe_color3 = stripe_color_ORB;  
  }
  else if (is_stripe_color_ROY) {
    stripe_color3 = stripe_color_ROY;  
  }
  else if (is_stripe_color_PCB) {
    stripe_color3 = stripe_color_PCB;  
  }
  else if (is_stripe_color_PLP) {
    stripe_color3 = stripe_color_PLP;
  }
  else if (is_stripe_color_CSB) {
    stripe_color3 = stripe_color_CSB;
  }
  else if (is_stripe_color_BGC) {
    stripe_color3 = stripe_color_BGC;
  }
  else if (is_stripe_color_BYO) {
    stripe_color3 = stripe_color_BYO;
  }






//***********************************************************************************************
  //--------- PLAID - START ----------------------------------------------
  let current_color = white;
 
  noStroke();
  let background_color = color(stripe_color3[0]);
  fill(background_color);
  rect(0, 0, cell_size, cell_size);


 


  // draw horizontal stripes (rows)
  let color_count = 1;
  for (let i = 0; i < num_stripe_rows; i++) {  // iterations: 0, 1, 2, 3, 4, 5
    if (i % 2 == 1) {   // odd
      current_color = stripe_color3[color_count];
      current_color.setAlpha(color_alpha);
      fill(current_color);
      rect(0, stripe_height * i, cell_size, stripe_height)  // rect(x, y, width, height) -> (x, y) is top-left corner of rectangle  
      color_count++;
      if (color_count > stripe_color3.length - 1) {
        color_count = 1;
      }
    }
  }






  // draw vertical stripes
  color_count = 1;  
  for (let i = 0; i < num_stripe_cols; i++) {  // iterations: 0, 1, 2, 3, 4, 5
    if (i % 2 == 1) {   // odd
      current_color = stripe_color3[color_count];
      current_color.setAlpha(color_alpha);
      fill(current_color);
      rect(stripe_width * i, 0, stripe_width, cell_size)  // rect(x, y, width, height) -> (x, y) is top-left corner of rectangle  
      color_count++;
      if (color_count > stripe_color3.length - 1) {
        color_count = 1;
      }
    }
  }


  //--------- PLAID - END ----------------------------------------------
//***********************************************************************************************








//***********************************************************************************************
// ---------- SHEEP PARAMETERS - START --------------------------------------------------------
// sheep size
let sheepFurSize = 38;
let cheekSize = 5.5;
let mouthSize = 0.9;


// sheep color
let sheepCol = color(pink);


// sheep position
let sheep_pos_x = -153.0;
let sheep_pos_y = -173.0;

// ---------- SHEEP PARAMETERS - END --------------------------------------------------------
 

    // ------------ SHEEP BACK LEGS / FEET ---------------------------------
 
    //sheep legs
    noStroke();
    fill(sheepCol);
    rect(sheep_pos_x + 71, sheep_pos_y + 133,7,25);   // right leg
    rect(sheep_pos_x + 106, sheep_pos_y + 133,7,25);   //left leg


    //sheep feet
    fill(0); //black
    rect(sheep_pos_x + 71, sheep_pos_y + 156,7,6); //left hoof
    rect(sheep_pos_x + 106, sheep_pos_y + 156,7,6); //right hoof






    //--------  SHEEP BODY -----------------------------------------


    //sheep body fur
    noStroke();
    fill(sheepCol);
    ellipse(sheep_pos_x + 100, sheep_pos_y + 100,sheepFurSize,sheepFurSize);
    ellipse(sheep_pos_x + 120, sheep_pos_y + 105,sheepFurSize,sheepFurSize);
    ellipse(sheep_pos_x + 127, sheep_pos_y + 123,sheepFurSize,sheepFurSize);
    ellipse(sheep_pos_x + 115, sheep_pos_y + 135,sheepFurSize,sheepFurSize);
    ellipse(sheep_pos_x + 97, sheep_pos_y + 137,sheepFurSize,sheepFurSize);
    ellipse(sheep_pos_x + 80, sheep_pos_y + 130,sheepFurSize,sheepFurSize);
    ellipse(sheep_pos_x + 80, sheep_pos_y + 109,sheepFurSize,sheepFurSize);


    //sheep fur filler
    ellipse(sheep_pos_x + 102, sheep_pos_y + 120,50,25);


    //---------------------------------------------------------------


    //---------- SHEEP HEAD -------------------------------------------
    noStroke();
    //sheep head
    fill(247, 220, 193); //beige
    ellipse(sheep_pos_x + 114, sheep_pos_y + 117,30,24);


    //sheep ears
    ellipse(sheep_pos_x + 100, sheep_pos_y + 108,15,5);   // right ear
    ellipse(sheep_pos_x + 127, sheep_pos_y + 108,15,5);   // left ear


    //sheep eyes
    fill(0); //black
    ellipse(sheep_pos_x + 110, sheep_pos_y + 113,2,5);   // right eye
    ellipse(sheep_pos_x + 119, sheep_pos_y + 113,2,5);    // left eye


    //sheep nose
    ellipse(sheep_pos_x + 115, sheep_pos_y + 118,4,2);


    //sheep cheeks
    fill(240, 156, 188); //pink
    ellipse(sheep_pos_x + 105, sheep_pos_y + 118,cheekSize,cheekSize);
    ellipse(sheep_pos_x + 124, sheep_pos_y + 118,cheekSize,cheekSize);


    //sheep mouth
    noFill();
    stroke(0); //black
    strokeWeight(mouthSize);
    arc(sheep_pos_x + 115, sheep_pos_y + 121,10,6,0,180);
   
    // ------------ SHEEP FRONT LEGS / FEET ---------------------------------
    //sheep legs
   
    noStroke();
   
    fill(sheepCol);
    rect(sheep_pos_x + 83, sheep_pos_y + 141,7,25); // right leg
    rect(sheep_pos_x + 118, sheep_pos_y + 141,7,25); // left leg
   


    //sheep feet
    fill(0); //black
    rect(sheep_pos_x + 83, sheep_pos_y + 160,7,6); // right hoof
    rect(sheep_pos_x + 118, sheep_pos_y + 160,7,6); // left hoof




  //------------- SHEEP END -----------------------------------------------------
  //*****************************************************************************


}
 
 

