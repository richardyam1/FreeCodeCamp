$(document).ready(function(){
  var initial_break = 5;
  var initial_work = 25;
  //Store minutes in seperate value so timer can reset to original value when timer fully elapsed
  var break_minute = 5;
  var work_minute = 25;
  var seconds = 0;
  //Stops the timer
  var paused=  false;
  //Switch back and forth from break time
  var rest_time = false;
  //Check session status so user can't modify time mid-session.
  var session = false;
  var audio = new Audio("http://www.mediacollege.com/downloads/sound-effects/city/factorywhistle-01.mp3");
  //Will store setInterval function
  var countdown;

  $("#initial_break").text(initial_break);
  $("#initial_work").text(initial_work);
  $("#session").text("Start Session");
  $("#minute").text(initial_work);

  $("#minus_break").on("click",function(){
    if(initial_break > 1 && session === false){
      initial_break--;
      break_minute = initial_break;
      $("#initial_break").text(initial_break);
    }
  });
   
   $("#plus_break").on("click", function(){
     if(initial_break < 15 && session === false){
      initial_break++;
      break_minute = initial_break;
       $("#initial_break").text(initial_break);

     }
   });
    
    $("#minus_work").on("click", function(){
      if(initial_work > 1 && session === false){
        initial_work--;
        work_minute = initial_work;
        $("#minute").text(initial_work);
        $("#initial_work").text(initial_work);


      }
    });
    
    $("#plus_work").on("click", function(){
      if(initial_work < 40 && session === false){
        initial_work++;
        work_minute = initial_work;
        $("#minute").text(initial_work);
        $("#initial_work").text(initial_work);
      }
    });
    
    $(".timer").on("click", function(){
      session = true;
      //If session is not paused, proceed with countdown
      if(paused === false){
        countdown = setInterval(function(){
            //Session time
            if(rest_time === false){
              if(seconds < 10){
                seconds = '0' + seconds;
              }
              $("#session").text("Pause Session");
              $("#minute").text(work_minute + ":" + seconds);
              seconds--;

              if(work_minute === 0 && seconds === -1){
                rest_time = true;
                work_minute= initial_work;
                seconds = 0;
                $("html body").animate({ backgroundColor: "#03FBCA" });
                audio.play();
            }

             else if(work_minute > -1 && seconds === -1){
               seconds = 59;
              work_minute--;

            }

           
          }
          //Break time
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
                seconds = 0;
                $("html body").animate({ backgroundColor: "#74D925" });
                audio.play();

              }

            else if(break_minute > -1 && seconds === -1){
                seconds = 59;
                break_minute--;
              }
              
          }
          
        },1000);
  }
          //When user pauses session
          else{
            $("#session").text("Resume");
             clearInterval(countdown);
      
            }
            //Paused value changes with each click
            paused = !paused;

      });
  
    $(".reset").on("click", function(){
        clearInterval(countdown);
        $("#initial_break").text(initial_break);
        $("#initial_work").text(initial_work);
        $("#session").text("Start Session");
        $("#minute").text(initial_work);
        $("html body").animate({ backgroundColor: "#74D925" });
        seconds = 0;
        paused=  false;
        rest_time = false;
        session = false;
    });
    
  
  
});