let $ = function (id) {
  return document.getElementById(id); 
};

let  calculate_click = function () {
  let subtotal = parseFloat( $("subtotal").value );
  var taxRate  = parseFloat( $("taxRate").value );

  $("salesTax").value = "";
  $("total").value = "";

  if ( isNaN(subtotal) || subtotal < 0 ) {
      alert("Subtotal must be a number that is zero or more!");
  }
   
  else if ( isNaN(taxRate) || taxRate < 0 ) {
      alert("Tax Rate must be a number that is zero or more!");

  } else {
      let salesTax = subtotal * (taxRate / 100);
      salesTax = parseFloat( salesTax.toFixed(2) );
      let total = subtotal + salesTax;
      $("salesTax").value = salesTax;
      $("total").value = total.toFixed(2);
  }
};

window.onload = function () {
  $("calculate").onclick = calculate_click;
  $("subtotal").focus();
};