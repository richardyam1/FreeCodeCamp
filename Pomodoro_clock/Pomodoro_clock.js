$(document).ready(function(){
  var break_minute = 5;
  var work_minute = 1;
  //Set to 5 for testing purposes
  var seconds = 0;
  var paused = true;
  var break_time = false;
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
       

      var count_down = setInterval(function(){
        if(break_time === false){
          if(seconds < 10){
            seconds = '0' + seconds;
          }
          if(paused === true){
            $(".timer").html("Resume Session" + "<br>" + "<br>" + (work_minute )  + ":" + seconds);

            clearInterval(countdown);
          }
          else{
          $(".timer").html("Pause Session" + "<br>" + "<br>" + (work_minute )  + ":" + seconds);
          seconds--;
          }
          

          if(work_minute === 0 && seconds === -1){
            break_time = true;
            seconds = 5;
          }

          else if(work_minute > -1 && seconds === -1){
            //Set to 5 for testing purposes
            seconds = 5;
            work_minute--;
          }
          

         
        }
        else if(break_time === true){
            if(seconds < 10){
              seconds = '0' + seconds;
            }

            
            $(".timer").html("Pause Break" + "<br>" + "<br>" + (break_minute )  + ":" + seconds);
            seconds--;
            
            if(paused === true){
              $(".timer").html("Resume Break" + "<br>" + "<br>" + (break_minute)  + ":" + seconds);

              clearInterval(countdown);
            }
          if(break_minute === 0 && seconds === -1){
              break_time = false;
              seconds = 5;
            }

          else if(break_minute > -1 && seconds === -1){
              seconds = 5;
              break_minute--;
            }
            
        }
        
      },1000);
        
    });
    
  
  
});