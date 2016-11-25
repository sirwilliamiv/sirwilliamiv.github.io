








console.log("Hey, I work");

 $(document).ready(function(){


         $(function(){
        $("h2 .first").typed({
            strings: ["Currently enrolled at Nashville Software School Full-Stack Developement track. Technologies in progress: "],
            typeSpeed: 30,
            callback: function() {
              showThis();
            },
          
        });
   
     function showThis(){

        $("span.second").typed({
              strings: ["JavaScript", "Node.js", "Ajax", "Angular", "expressjs", "Atom", "Grunt", "Mocha", "Chai"],
              backDelay: 1500,    
              typeSpeed: 100,
              backSpeed: 100,
              loop: true,
              
          });

      }
   });




    


//         setTimeout(function(){
//         $(".element1").css("display", "inherit");
//         $(".element1").typed({
//             strings: ["yes ykles"],
//             typeSpeed: 10, // typing speed
//             backDelay: 1000, // pause before backspacing
//             loop: false, // loop on or off (true or false)
//             loopCount: false, // number of loops, false = infinite
//             callback: function(){ } // call function after typing is done
//         });
//     }, 200);


// setTimeout(function(){
//         $(".element4").css("display", "inherit");
//         $(".element4").typed({
//             strings: ["I am typing for you"],
//             typeSpeed: 10, // typing speed
//             backDelay: 750, // pause before backspacing
//             loop: false, // loop on or off (true or false)
//             loopCount: false, // number of loops, false = infinite
//             callback: function(){ } // call function after typing is done
//         });
//     }, 2000);

 });










    
    
    
 