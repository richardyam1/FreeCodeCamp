$(document).ready(function(){
  var break_minute = 5;
  var work_minute = 1;
 
  //Set to 5 for testing purposes
  var seconds = 5;
  var paused = true;
  var rest_time = false;
  $("#break_minute").text(break_minute);
  $("#work_minute").text(work_minute);
  $(".timer").html("Start Session" + "<br>" + "<br>" + work_minute);

  $("#minus_break").on("click",function(){
    if(break_minute > 1){
      break_minute--;
      $("#break_minute").text(break_minute);
    }
  });
   
   $("#plus_break").on("click", function(){
     if(break_minute < 15){
       break_minute++;
       $("#break_minute").text(break_minute);
     }
   });
    
    $("#minus_work").on("click", function(){
      if(work_minute > 1){
        work_minute--;
        $("#work_minute").text(work_minute);
        $(".timer").html("Start Session" + "<br>" + "<br>" + work_minute);

      }
    });
    
    $("#plus_work").on("click", function(){
      if(work_minute < 40){
        work_minute++;
        $("#work_minute").text(work_minute);
        $(".timer").html("Start Session" + "<br>" + "<br>" + work_minute);

      }
    });

    $(".timer").on("click", function(){
       if(paused === true){
        paused = false;
       }

       else if(paused === false){
        paused = true;
       }
       //Stores initial minutes to reset to during transition
       var break_down = break_minute;
       var work_down = work_minute;

      var count_down = setInterval(function(){
        if(rest_time === false){
          
          
          if (paused === false){
            if(seconds < 10){
              seconds = '0' + seconds;
            }
            $(".timer").html("Pause Session" + "<br>" + "<br>" + (work_down )  + ":" + seconds);
            seconds--;
            }
          else if(paused === true){
            if(seconds < 10){
              seconds = '0' + seconds;
          }
            $(".timer").html("Resume Session" + "<br>" + "<br>" + (work_down )  + ":" + seconds);

            clearInterval(countdown);
          }

          if(work_down === 0 && seconds === -1){
            rest_time = true;
            work_down = work_minute;
            seconds = 5;
          }

          else if(work_down > -1 && seconds === -1){
            //Set to 5 for testing purposes
            seconds = 5;
            work_down--;
          }
          

         
        }
        else if(rest_time === true){
            if(seconds < 10){
              seconds = '0' + seconds;
            }
 
            $(".timer").html("Pause Break" + "<br>" + "<br>" + (break_down)  + ":" + seconds);
            seconds--;
            
            if(paused === true){
              $(".timer").html("Resume Break" + "<br>" + "<br>" + (break_down)  + ":" + seconds);

              clearInterval(countdown);
            }
          if(break_down === 0 && seconds === -1){
              rest_time = false;
              break_down = break_minute;
              seconds = 5;
            }

          else if(break_down > -1 && seconds === -1){
              seconds = 5;
              break_down--;
            }
            
        }
        
      },1000);
        
    });
    
  
  
});