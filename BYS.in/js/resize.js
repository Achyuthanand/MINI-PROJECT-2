function myFunction2(y) {
  if (y.matches) { 
    
    
    alert("This website is designed only for Laptops/Desktops");
  } 


}

var y = window.matchMedia("(max-width: 800px)");

myFunction2(y);
y.addListener(myFunction2); 





function myFunction(x) {
  if (x.matches) { 
    
    
    alert("Make sure that your browser is full screen");
  } 


}

var x = window.matchMedia("(max-width: 1200px)");

myFunction(x);
x.addListener(myFunction); 





