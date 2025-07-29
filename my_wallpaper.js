//your parameter variables go here!
let sheepFurSize = 35;
let cheekPosY = 118;
let cheekSize = 4;
//let purple = color(205, 139, 224); // line 
//let pink = color(240, 156, 188); // line 
//let blue = color(128, 206, 255); // line
//let green = color(157, 237, 162); // line 
//let white = color(255); // line 
//let sheepCol = blue; // line
let mouthSize = 1;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  if (sheepFurSize > 30) {
    background(200, 230, 255); // light blue background
  } else {
    background(240, 255, 240); //light honeydew green colour
  }
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
    //colors
    let purple = color(205, 139, 224);
    let pink = color(240, 156, 188);
    let blue = color(128, 206, 255);
    let green = color(157, 237, 162);
    let white = color(255);

    let sheepCol = purple;

    //--------  BODY -----------------------------------------

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

    //---------- HEAD -------------------------------------------

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
    
    // ------------ LEGS / FEET ---------------------------------
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
