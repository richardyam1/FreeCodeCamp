$(document).ready(function(){
  var break_time = 5;
  var work_time = 25;
  $("#break_minute").text(break_time);
  $("#work_minute").text(work_time);
  
  
  $("#minus_break").on("click",function(){
    if(break_time > 1){
      break_time--;
      $("#break_minute").text(break_time);
    }
  });
   
   $("#plus_break").on("click", function(){
     if(break_time < 15){
       break_time++;
       $("#break_minute").text(break_time);
     }
   });
    
    $("#minus_work").on("click", function(){
      if(work_time > 1){
        work_time--;
        $("#work_minute").text(work_time);
      }
    });
    
    $("#plus_work").on("click", function(){
      if(work_time < 40){
        work_time++;
        $("#work_minute").text(work_time);
      }
    });
    
    
  });
  
