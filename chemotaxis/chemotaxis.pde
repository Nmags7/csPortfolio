double v=3;
float o;
int c=0;
bacteria[] b=new bacteria[10];

void setup(){
  background(0);
  fullScreen();
  for(int i=0; i<10; i++){
    bacteria d= new bacteria();
    b[i]=d;
  }
  
}

void draw(){
  background(0);
  fill(255);
  textSize(30);
  text("Click and hold to move toward, release to move away, press space to stop", 150,100);
  for(int i=0; i<b.length;i++){
    if(mousePressed==true&&b[i].distance()>100){
      b[i].move();
    }
    else{
      b[i].moveAway();
    }
    if(keyPressed==true){
      if(key==' '){
        c++;
        if(c%2==1){
        noLoop();
        }
      }
    }
    b[i].show();
  }
  
}
void mouseClicked(){
  draw();
}
  
class bacteria{
  float x;
  float y;
  bacteria(){
    x=(int)(Math.random()*1000);
    y=(int)(Math.random()*1000);
      }
  void show(){
    noStroke();
    fill((int)(Math.random()*255), (int)(Math.random()*255),(int)(Math.random()*255));
    ellipse(x,y, 25, 25);
    

  }
  void move(){
    if(mouseX==x){
      if(mouseY>y){
        o=3*PI/2;
      }
      else{
        o=PI/2;
      }
    }
    else{
      o=atan((Math.abs(mouseY-y))/(Math.abs(mouseX-x)));
    }
    float vx=(float)(v*cos(o));
    float vy=(float)(v*sin(o));
    
    if(x<mouseX){
      x=x + vx ;
    } 
    else{
    x-=vx;
    }
    if(y<mouseY){
      y+=vy;
    } 
    else{
    y-=vy;
    }
  }
  void moveAway(){
    if(mouseX==x){
      if(mouseY<y){
        o=3*PI/2;
      }
      else{
        o=PI/2;
      }
    }
    else{
      o=atan((Math.abs(mouseY-y))/(Math.abs(mouseX-x)));
    }
    float vx=(float)(v*cos(o));
    float vy=(float)(v*sin(o));
    
    if(x>mouseX){
      x=x + vx;
    } 
    else{
    x-=vx;
    }
    if(y>mouseY){
      y+=vy;
    } 
    else{
    y-=vy;
    }
  }
  double distance(){
    return (Math.sqrt((Math.pow(mouseX-x,2))+(Math.pow(mouseY-y,2))));
  }
}