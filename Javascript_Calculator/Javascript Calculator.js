$(document).ready(function() {
  var input = 0;
  var equation = "";
  //Checks if there's a decimal
  var decimal = false;
  var max = 1;
  //This makes sure the user can't start with pressing the operator key
  var math_sign = true;
  var answer = 0;
  //Function resets certain values 
  function reset() {
    input = 0;
    max = 1;
    math_sign = true;
    decimal = false;
  }
  $("#input").text(0);
  $(".number").on("click", function() {
    //Fills in number as long as the amount of numbers is less than 8.
    if (max < 8) {
      if (input === 0) {
        input = $(this).attr('id');
      } else {
        input += $(this).attr('id');
        max++;
      }
      //Starts equation over if number is pressed after equal key
      if (equation === answer && math_sign === false) {
        equation = "";
      }
      //Fills in the screen and allows the user to use a operator key.
      $("#input").text(input);
      $("#equation").text(equation);
      math_sign = false;
    }
  });
  //Resets all values
  $("#clear_all").on("click", function() {
    equation = "";
    reset();
    $("#input").text(0);
    $("#equation").text("");
  });
 //Resets everything except the current equation.
  $("#clear_input").on("click", function() {
    reset();
    math_sign = false;
    $("#input").text(0);
    $("equation").text(equation);
  });
  //Button is a different shape from the others.  Had to give it it's own class to modify in the CSS.
  $(".zero").on("click", function() {
    if (max < 8) {
      input += 0;
      $("#input").text(input);
      max++;
    }
  });

  $("#decimal").on("click", function() {
    if (decimal == false && max < 8) {
      input += ".";
      $("#input").text(input);
      $("#equation").text(equation);
      //Sets it so the user can't input anymore decimals
      decimal = true;
      math_sign = true;
    }
  });
  
  //Each math operator calculates the current equation before putting their corresponding sign at the end of the new equation.
  $("#plus").on("click", function() {
    if (math_sign === false) {
      equation += input;
      equation = +eval(equation).toFixed(2);
      equation += (" + ");
      $("#input").text("+");
      $("#equation").text(equation);
      reset();
    }
  });

  $("#minus").on("click", function() {
    if (math_sign === false) {
      equation += input;
      equation = +eval(equation).toFixed(2);
      equation += (" - ");
      $("#input").text("-");
      $("#equation").text(equation);
      reset();
    }
  });

  $("#multiply").on("click", function() {
    if (math_sign == false) {
      equation += input;
      equation = +eval(equation).toFixed(2);
      equation += (" * ");
      $("#input").text("*");
      $("#equation").text(equation);
      reset();
    }
  });

  $("#divide").on("click", function() {
    if (math_sign === false) {
      equation += input;
      equation = +eval(equation).toFixed(2);
      equation += (" / ");
      $("#input").text("/");
      $("#equation").text(equation);
      reset();
    }

  });
  //This produces the final answer.
  $("#equal").on("click", function() {
    equation += input;
    //Plus sign in front of eval drops extra zeros
    answer = +eval(equation).toFixed(2);
    $("#input").text(answer);
    $("#equation").text(answer);
    equation = answer;
    reset();
    input = "";
    math_sign = false;

  });

});