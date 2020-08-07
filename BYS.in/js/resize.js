function myFunction(x) {
  if (x.matches) { 
    
    
     alert("This website is designed only for Laptops/Desktops\nand\nMake sure that your browser is full screen");
  } 


}

var x = window.matchMedia("(max-width: 1240px)");

myFunction(x);
x.addListener(myFunction); 





