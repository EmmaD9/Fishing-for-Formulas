//this is my calculus final project :D
//must be viewed with both graphics/console otherwise the mouseclickmethod
//won't work

//the total list of 60 formulas
var formulas = ["f'g+g'f","d/dx (x^n) = nx^(n-1)","(f'g-g'f)/g^2","f'(u)*u'","(f(h+x)-f(x))/h","sinθ/θ = 1","tanθ = sinθ/cosθ","y=mx+b","y1-y2 = m(x1=x2)","e^x=x'","dy/dx","d/dt","(d/dx) sin(x) = cos(x)","(d/dx) cos(x) = -sin(x)","(d/dx) tan(x) = sec^2(x)","(d/dx) cot(x) = -csc(x)^2","(d/dx) sec(x) = sec(x) * tan(x)","(d/dx) csc(x) = -csc(x) * cot(x)","[sin^-1(u)]' = u'/√1-u^2","[tan^-1(u)]' = u'/1+u^2","[sec^-1(u)]' = u'/|u|√u^2-1","[cos^-1(u)]' = -u'/√1-u^2","[cot^-1(u)]' = -u'/(1+u^2)","[csc^-1(u)]' = -u'/|u|√u^2-1","B∫a f(x) dx = f(x) B|A = f(b) - f(a)","f(a) < k < f(b) // a < c < b // f(c) = k","Lim (as x is approaching c) (f(d)-f(c))/(d-c)","d/dx * x^n = nx^n-1","∫f(g(x))*g'(x)dx","nΣi=1 f(ci)Δx","d/dx[f(x)+/-g(x)] = d/dx [f(x)] + d/dx [g(x)] = f'(x) - g'(x)","d/dx a^x = a^x ln(a)","d/dx (arc sin(x)) = 1/√1-x^2","d/dx (arc tan(x)) = 1/1+x^2","∫a dx = ax + c","∫1/2 dx = ln |x| + c","∫e^x dx = e^x + c","∫a^x dx = (a^x)/ln(a) + c","∫ln x dx = xln(x) - x + c","∫ sin x dx = -cos(x) + c","∫ cos x dx = sin(x) + c","∫ tan x dx = ln |sec x| + c","∫ cot x dx = ln |sin x| + c","∫ sec x dx = ln |sec x + tan x| + c","∫ csc x dx =ln |csc x - cot x| + c","∫ sec^2 x dx = tan x + c","∫ sec x * tan x dx = sec x + c","∫ csc^2 x dx = -cot x + c","∫ tan^2 x dx = tan x - x + c","∫ dx/√a^2 - x^2 = arcsin(x/a) + c","∫ dx/√a^2 + x^2 = ln| (x+√a^2 + x^2)/ a|","nΣi=1 i^3 = (n^2)(n+1)^2/4","√(x2 - x1)^2 + (y2 - y1)^2","a^2 + b^2 = c^2","a = ½*bh","v = ⅓ * π * r^2 * h","V = 4/3 * π * r^3","V = π * r^2 * h","A = 2πr^2 + 2πrh","v= s^3"];

//the list of formulas that have been "caught"
var basket = [];

//finds the number of formulas in basket and the formula list
var formulaAmount = formulas.length;
var basketAmount = basket.length;

//my start function that holds the intro and other functions
function start() {
    //adds the cover image 

    var start = new WebImage("https://codehs.com/uploads/b508208584edc477752b96eeb36a0a59");
    start.setSize(200, 400);
    start.setPosition(getWidth()/4, getHeight()/9);
    add(start);


    //intro
    println("Welcome to Fishing for Formulas!");
    println("This is a text based game designed to demonstrate 60 formulas used in Calculus.");
    
    //explain game better
    println("Here's how the game works...")
    println("Each click casts your line to catch a formula fish.");
    println("Happy formulas fishing!!");

    //click to start
    println("Click to start and cast your line!");
    mouseClickMethod(fishFinder);

 
 };
 
 function fishFinder(){
    //covers up the start screen
    var whiteBlock = new Rectangle(getWidth(), getHeight());
    whiteBlock.setPosition(0,0);
    whiteBlock.setColor(Color.white);
    add(whiteBlock);
     
    //adds the lil fishing girl
    var start = new WebImage("https://codehs.com/uploads/0bd86182f31d078d894eb779362fb346");
    start.setSize(300, 150);
    start.setPosition(getWidth()/8, getHeight()/5);
    add(start);
    println("Let's cast!")
    
    //randomly selects a formulas from the array for the user to "catch"
    var random = Randomizer.nextInt(0,formulaAmount -1)
    var fishCaught = formulas[random];
    
    println("You caught " + fishCaught);
    var elt = document.getElementById("basket");
    elt.innerText = "You caught " + fishCaught ;
    checkBasket(fishCaught);

 }
 
 function checkBasket(fish){
    println("Let's check your basket...");
    basket.push(fish);
    //formulas.remove(fish)
    println("Good job! Add it to your basket!");
    
    //changes where the fish is lol
    var start = new WebImage("https://codehs.com/uploads/59b71f2466c392cd793a599c1ffcf099");
    start.setSize(100, 100);
    start.setPosition(Randomizer.nextInt(0, getWidth()), Randomizer.nextInt(0, getHeight()));
    add(start);
    println("Let's cast!")
    
    //loops over the basket array to print each item
    println("You've got " + basket.length + " fish: ")
    for(var i = 0; i < basket.length; i++){
        print(basket[i] + ", ");
    }
 }

 start();
