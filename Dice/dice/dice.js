var num;
function setup() {
  createCanvas(133,150);
}

function draw() {
  background(0);
  var sum;
  for(int i=1; i<123; i+11){
    for(int y=1; i<123; i+11){
      var d=Die(i,y);
      d.roll();
      d.show();
      sum=sum+d.getNum();
    }
  }
  noLoop();
}  
function mousePressed()
{
    redraw();
}
class Die //models one single dice cube
{
    //variable declarations here
    Die(int x, int y) //constructor
    {
        //variable initializations here
    }
    void roll()
    {
      num=(int)(Math.random()*6)+1;  
    }
    void show()
    {
        roll();
        fill(255);
        rect(x,y,x+10,y+10);
        fill((int)(Math.random()*266));
        if(num==1){
          ellipse(x+5,y+5, 1,1);
        }
        if(num==2){
          ellipse(x+2.5,y+2.5, 1,1);
          ellipse(x+7.5,y+7.5, 1,1);
        }
        if(num==3){
          ellipse(x+2.5,y+2.5, 1,1);
          ellipse(x+5,y+5, 1,1);
          ellipse(x+7.5,y+7.5, 1,1);
        }
        if(num==4){
          ellipse(x+2.5,y+2.5, 1,1);
          ellipse(x+7.5,y+2.5, 1,1);
          ellipse(x+7.5,y+7.5, 1,1);
          ellipse(x+2.5, y+7.5, 1,1);
        }
        if(num==4){
          ellipse(x+2.5,y+2.5, 1,1);
          ellipse(x+7.5,y+2.5, 1,1);
          ellipse(x+7.5,y+7.5, 1,1);
          ellipse(x+2.5, y+7.5, 1,1);
          ellipse(x+5, y+5, 1,1);
        }
        if(num==5){
          ellipse(x+2.5,y+2.5, 1,1);
          ellipse(x+7.5,y+2.5, 1,1);
          ellipse(x+7.5,y+7.5, 1,1);
          ellipse(x+2.5, y+7.5, 1,1);
          ellipse(x+5, y+5, 1,1);
        }
        if(num==6){
          ellipse(x+2.5,y+2.5, 1,1);
          ellipse(x+7.5,y+2.5, 1,1);
          ellipse(x+7.5,y+7.5, 1,1);
          ellipse(x+2.5, y+7.5, 1,1);
          ellipse(x+2.5, y+5, 1,1);
          ellipse(x+7.5, y+2.5, 1,1);
        }
        int getNum(){
          return num;
        }
        //your code here
    }
}