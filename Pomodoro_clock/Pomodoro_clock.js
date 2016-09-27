$(document).ready(function(){
  var initial_break = 5;
  var initial_work = 1;
  var break_minute;
  var work_minute;
  //Set to 5 for testing purposes
  var seconds = 5;
  var paused=  true;
  var rest_time = false;
  var audio = new Audio("http://www.mediacollege.com/downloads/sound-effects/city/factorywhistle-01.mp3");
  var countdown;
  $("#initial_break").text(initial_break);
  $("#initial_work").text(initial_work);
  $("#session").text("Start Session");
  $("#minute").text(initial_work);

  $("#minus_break").on("click",function(){
    if(initial_break > 1){
      clearInterval(countdown);
      seconds = 5;
      paused = true;
      initial_break--;
      break_minute = initial_break;
      $("#session").text("Resume");
      $("#initial_break").text(initial_break);
      
    }
  });
   
   $("#plus_break").on("click", function(){
     if(initial_break < 15){
      clearInterval(countdown);
      seconds = 5;
      paused = true;
      initial_break++;
      break_minute = initial_break;
      $("#session").text("Resume");

       $("#initial_break").text(initial_break);

     }
   });
    
    $("#minus_work").on("click", function(){
      if(initial_work > 1){
        clearInterval(countdown);
        seconds = 5;
        paused = true;

        initial_work--;
        work_minute = initial_work;
        $("#minute").text(initial_work);
        $("#session").text("Resume");

        $("#initial_work").text(initial_work);


      }
    });
    
    $("#plus_work").on("click", function(){
      if(initial_work < 40){
        clearInterval(countdown);
        seconds = 5;
        paused = true;
        initial_work++;
        work_minute = initial_work;
        $("#minute").text(initial_work);
        $("#initial_work").text(initial_work);
        $("#session").text("Resume");


      }
    });
     break_minute = initial_break;
     work_minute = initial_work;
    $(".timer").on("click", function(){
 
    if(paused === true){
       //Stores initial minutes to reset to during transition
       
       
      countdown = setInterval(function(){
       
          if(rest_time === false){
            if(seconds < 10){
              seconds = '0' + seconds;
            }
            $("#session").text("Pause Work");
            $("#minute").text(work_minute + ":" + seconds);
            seconds--;

            if(work_minute === 0 && seconds === -1){
            rest_time = true;
            work_minute= initial_work;
            seconds = 5;
            $("html body").animate({ backgroundColor: "#03FBCA" });
            audio.play();
          }

           else if(work_minute > -1 && seconds === -1){
            //Set to 5 for testing purposes
             seconds = 5;

            work_minute--;

          }

         
        }
        else if(rest_time === true){
            if(seconds < 10){
              seconds = '0' + seconds;
            }
            $("#session").text("Pause Break");
            $("#minute").text(break_minute + ":" + seconds);
            seconds--;
            
            
          if(break_minute === 0 && seconds === -1){
              rest_time = false;
              break_minute = initial_break;
              seconds = 5;
              $("html body").animate({ backgroundColor: "#A3D826" });
              audio.play();

            }

          else if(break_minute > -1 && seconds === -1){
              seconds = 5;
              break_minute--;
            }
            
        }
        
      },1000);
}
        else{
          $("#session").text("Resume");
           clearInterval(countdown);
    
          }
          paused = !paused;

    });

    $(".reset").on("click", function(){
        clearInterval(countdown);
        $("#initial_break").text(initial_break);
        $("#initial_work").text(initial_work);
        $("#session").text("Start Session");
        $("#minute").text(initial_work);
        seconds = 5;
        paused=  true;
        rest_time = false;
    });
    
  
  
});