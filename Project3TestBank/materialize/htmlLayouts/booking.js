///////////////////
////DATEPICKER////
///MATERIALIZE////
//////////////////

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".datepicker");
  var instances = M.Datepicker.init(elems, options);
});

// Or with jQuery

$(document).ready(function() {
  $(".datepicker").datepicker();
});

/////////////////
////TIMEPICKER///
/////////////////

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".timepicker");
  var instances = M.Timepicker.init(elems, options);
});

// Or with jQuery

$(document).ready(function() {
  $(".timepicker").timepicker();
});
