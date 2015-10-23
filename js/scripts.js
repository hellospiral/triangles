var equilateral = function(sideA, sideB, sideC) {
  if ((sideA === sideB) && (sideB === sideC) && (sideA === sideC)) {
    return true;
  }
  else if ((sideA !== sideB) || (sideB !== sideC) || (sideA !== sideC)) {
    return false;
  }
};

var isosceles = function(sideA, sideB, sideC) {
  if (((sideA === sideB) && (sideB !== sideC)) || ((sideB === sideC) && (sideC !== sideA)) || ((sideA === sideC) && (sideA !== sideB))) {
    return true;
  }
  else {
    return false;
  }
};

var scalene = function(sideA, sideB, sideC) {
  if ((sideA !== sideB) && (sideB !== sideC) && (sideA !== sideC)) {
    return true;
    }
    else {
      return false;
    }
};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());
      
    if (equilateral) {
        $(".equilateral").show();
    } 
    if (isosceles) {
        $(".isosceles").show();
    }
    if (scalene) {
        $(".scalene").show();
    }
    $("#result").show();
    event.preventDefault();
  });
});







/*var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0)) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  }
    else {
    return false;
  }
};*/



/*$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
      var year = parseInt($("input#year").val());
      var result = leapYear(year);
      
      $(".year").text(year);
      if (!result) {
        $(".not").text("not");
      }
      
      $("#result").show();
      event.preventDefault();
  });
})*/