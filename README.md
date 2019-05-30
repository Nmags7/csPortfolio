# Mags's Portfolio
* WebPage[here](https://nmags7.github.io/testWeb/NickMags/NickMagnuson.html)
    <p>I enjoyed this project. HTML and CSS were completely foreign to me, but not too difficult to learn. Also this was the first time I make a project public, and that seemed more cool at the time than it does now. I definately could've put a little more effort into this one, but I procrastinated hardcore.</p>
* Lightning JS [here](https://nmags7.github.io/LightningJS/magsJS/)
    <p>This was my inroduction to JavaScript. I learned that I do not like coding originally in it, but converting from Java to JavaScript is manageable due to a handy IPE called Brackets.</p>
* College Presentation [UMD](https://nmags7.github.io/testWeb/NickMags/umd.html)
    <p>This wasn't too tough to code, as it simply took learning how to embed a google slides presentation. UMD ended up being the school I chose to go to, and I'm happy I was forced to organize the information I recieved on my visit in the form of a presentation. </p>
* Starfield [here](https://nmags7.github.io/starfield5-1/)
    <p>This is definately the most eye catching project on my portfolio, but the code isn't super unique compared to the rest of my class. The one unique thing is the fact that I am decrementing speed, which eltimately makes my starfield grow outwardly.</p>
* Holiday Card [Photo of it, its difficult to get the project to run in live time, because it uses an arrayList](https://github.com/Nmags7/csPortfolio/blob/gh-pages/Screen%20Shot%202019-05-29%20at%209.23.47%20PM.png)
    <p>This project allows the user to decorate the christmas tree. It does so by adding an ellipse to an arrayList, based on the location of the user's mouse.</p>
* Readability [Photo](https://github.com/Nmags7/csPortfolio/blob/gh-pages/Screen%20Shot%202019-05-28%20at%2010.04.23%20PM.png)
    <p>This project reads a .txt file of huck finn, and outputs data based on the Fleisch Readablitiy Index.</p>
* Marvel Face Mask [Photo, live isn't possible because the program uses the java collection interface](https://github.com/Nmags7/csPortfolio/blob/gh-pages/Screen%20Shot%202019-05-29%20at%209.34.48%20PM.png)
    <p>This Program uses the OpenCV library to display face masks.</p>
    [repo]()
<body>
<ol>
  <li>Reflect on all your portfolio projects. </li>
  
  
  <Enter> <p>See individual projects</p>
  <li> What is one or two things that are a source of pride in your programming development? </li>
  
  
  <Enter> <p>I'm (semi) proud of my starfield project</p>
    
  <li>Identify them, write about why they are accomplishments, how you did it and what you learned.  Be sure to submit a code snippet along with your writing on the readMe file in your repo.</li>


<Enter> <p>The starfield project is an area of pride to me, not because of uniqueness, but because I was able to finish early and assist others. Here is possibly the only unique thing in my project. I decrement speed rather than leaving it constant.</p>
    
    
```Java
void move(){
    x+=sin((float)angle)*speed;
    y+=cos((float)angle)*speed;
    angle+=.05;
    speed-=.01;
  }
```
    
    
<li>Identify the most significant hurdle you encountered last trimester.  Write about what it was and how it was resolved </li>
    

<Enter> <p>Learning how to navigate github was an area of struggle for me. Specifically, creating repositories and using gh-pages to create links to my work stressed me out. I understand that forking from ACS curriculum creates a repository for me, but thanks to LightningJS, I'm confident in my ability to create my own repository and find the link to work I decide to make public. </p>

 <li>Once you are ready to submit your writing and code examples, study markdown (language used on github to format text </li>
 
 
 <Enter> <p>Done in this portfolio.</p>

<li>Describe the incremental and iterative development process of your included code, focusing on two distinct points in the development process. Describe the difficulties and/ or opportunities you encountered and how they were resolved or incorporated. In your description clearly indicate whether the development described was collaborative or independent. At least one of these points must refer to independent program development.</li>


<Enter> <ol>
<li> <p>This is my code for constant speed motion in my chemotaxis project. I learned how to make use of component vectors, and make ever updating horazontal and vertical velocity variables. </p> </li>
    
    
    ```Java
    
    void move(){
        x+=sin((float)angle)*speed;
        y+=cos((float)angle)*speed;
        angle+=.05;
        speed-=.01
    }
    ```

<li><p>Here is my code for creating a button on my webpage. My button is a link to my football highlight tape. Orininally, I had created a link, but the alternate color made for weird display of the text itself. Instead, I created a white button that was a bridge between the webpage and my highlight tape.</p></li>


```HTML
    <h2 class="middle">Football Highlight Tape
             <button type="button"><a href="https://www.hudl.com/video/3/7367880/59f54c81a019c31bb4e882c9">here</a></button>
    </h2>
    
```


</ol>

</ol>

</body>



