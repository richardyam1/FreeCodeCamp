$(document).ready(function(){
  var break_minute = 5;
  var work_minute = 25;
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
       /*
       if(break_time === true){
         var break_countdown = setInterval(function(){
            if(break_minute > 0 && seconds === -1){
              seconds = 5;
              break_minute--;
            }
            if(seconds < 10){
              seconds = '0' + seconds;
            }

            else if(break_minute === 0 && seconds === 0){
              break_time = false;
              work_countdown();
            }

            $(".timer").html("Pause Session" + "<br>" + "<br>" + (break_minute )  + ":" + seconds);
            seconds--;
            
            if(paused === true){
              $(".timer").html("Resume Session" + "<br>" + "<br>" + (break_minute)  + ":" + seconds);

              clearInterval(break_countdown);
            }
          },1000);
       }
       });
      if(break_time === false){
        var work_countdown = setInterval(function() {
          if(work_minute > 0 && seconds === -1){
            //Set to 5 for testing purposes
            seconds = 5;
            work_minute--;
          }
          if(seconds < 10){
            seconds = '0' + seconds;
          }

          else if(work_minute === 0 && seconds === 0){
            break_time = true;
            break_countdown();
          }
          $(".timer").html("Pause Session" + "<br>" + "<br>" + (work_minute )  + ":" + seconds);
          seconds--;
          
          if(paused === true){
            $(".timer").html("Resume Session" + "<br>" + "<br>" + (work_minute )  + ":" + seconds);

            clearInterval(work_countdown);
          }

        }, 1000);
      }*/

      var count_down = setInterval(function(){
        if(break_time === false){
          if(work_minute === 0 && seconds === 0){
            break_time = true;
          }

          else if(work_minute > 0 && seconds === -1){
            //Set to 5 for testing purposes
            seconds = 5;
            work_minute--;
          }
          if(seconds < 10){
            seconds = '0' + seconds;
          }

          $(".timer").html("Pause Session" + "<br>" + "<br>" + (work_minute )  + ":" + seconds);
          seconds--;
          
          if(paused === true){
            $(".timer").html("Resume Session" + "<br>" + "<br>" + (work_minute )  + ":" + seconds);

            clearInterval(work_countdown);
          }
        else if(break_time === true){
          if(break_minute === 0 && seconds === 0){
              break_time = false;
            }

          else if(break_minute > 0 && seconds === -1){
              seconds = 5;
              break_minute--;
            }
            if(seconds < 10){
              seconds = '0' + seconds;
            }

            
            $(".timer").html("Pause Break" + "<br>" + "<br>" + (break_minute )  + ":" + seconds);
            seconds--;
            
            if(paused === true){
              $(".timer").html("Resume Break" + "<br>" + "<br>" + (break_minute)  + ":" + seconds);

              clearInterval(break_countdown);
            }
        }
        }
      },1000);
        
    });
    
  
  
});