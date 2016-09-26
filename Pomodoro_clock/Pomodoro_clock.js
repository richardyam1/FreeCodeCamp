$(document).ready(function(){
  var initial_break = 5;
  var initial_work = 1;
 
  //Set to 5 for testing purposes
  var seconds = 5;
  var paused = true;
  var rest_time = false;
  
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
      $("#session").text("Break Time");
      $("#minute").text(initial_break);
      $("#initial_break").text(initial_break);
      
    }
  });
   
   $("#plus_break").on("click", function(){
     if(initial_break < 15){
      clearInterval(countdown);
      seconds = 5;
      paused = true;

       initial_break++;
       $("#session").text("Break Time");
       $("#minute").text(initial_break);
       $("#initial_break").text(initial_break);

     }
   });
    
    $("#minus_work").on("click", function(){
      if(initial_work > 1){
        clearInterval(countdown);
        seconds = 5;
        paused = true;

        initial_work--;
        $("#session").text("Work Time");
        $("#minute").text(initial_work);

        $("#initial_work").text(initial_work);


      }
    });
    
    $("#plus_work").on("click", function(){
      if(initial_work < 40){
        clearInterval(countdown);
        seconds = 5;
        paused = true;
        initial_work++;
        $("#session").text("Work Time");
        $("#minute").text(initial_work);
        $("#initial_work").text(initial_work);

      }
    });
    
    $(".timer").on("click", function(){
 
    if(paused === true){
       //Stores initial minutes to reset to during transition
       var break_minute = initial_break;
       var work_minute= initial_work;
       
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
            document.body.style.backgroundColor = "#05E1F9";
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
              document.body.style.backgroundColor = "#A3D826";

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
    
  
  
});