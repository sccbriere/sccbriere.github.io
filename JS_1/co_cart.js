"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Review Assigment

   Shopping Cart Form Script

   Author: Shannie C Briere
   Date: December 5th, 2019

   Filename: co_cart.js

   Function List
   =============

   calcCart()
      Calculates the cost of the customer order

   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals

   formatUSCurrency(val)
      Formats val as U.S.A. currency

*/

function formatUSCurrency(val) {
  return '$' + Math.round(val * 100) / 100;
}

function formatNumber(val, decimals) {
  return Math.round(val * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

function calcCart() {
  var modelQtyNode = document.getElementById('modelQty');
  var quantity = modelQtyNode.options[modelQtyNode.selectedIndex].value;

  // Find, calculate, and display the order quantity total
  var orderCost = parseFloat(document.getElementById('modelCost').value) * quantity;
  document.getElementById('orderCost').value = formatUSCurrency(orderCost);

  // Find, calculate, and display the shipping total
  var shippingOptions = document.getElementsByName('shipping');
  var shipCost;
  for (var i = 0; i < shippingOptions.length; i++) {
    if (shippingOptions[i].checked) {
      shipCost = parseFloat(shippingOptions[i].value) * quantity;
    }
  }
  document.getElementById('shippingCost').value = formatNumber(shipCost, 2);

  // Calculate and display subtotal
  document.getElementById('subTotal').value = formatNumber(orderCost + shipCost, 2);

  // Calculate and display sales tax
  var salesTax = 0.05 * (orderCost + shipCost);
  document.getElementById('salesTax').value = formatNumber(salesTax, 2);

  // Calculate and display total cart order
  document.getElementById('cartTotal').value = formatUSCurrency(orderCost + shipCost + salesTax);

  // Find and set selected shipping label to shippingType field
  var fieldset = document.getElementsByTagName('fieldset');
  var shippingLabel;
  for (var i = 1; i < fieldset[0].children.length; i++) {
    if (fieldset[0].children[i].children[0].checked) {
      shippingLabel = fieldset[0].children[i].textContent;
    }
  }
  document.getElementById('shippingType').value = shippingLabel;
}

window.addEventListener('load', function(event) {
  calcCart();
  document.getElementById('modelQty').addEventListener('change', function(event) {
    calcCart();
  });

  var shippingOptions = document.getElementsByName('shipping');
  for (var i = 0; i < shippingOptions.length; i++) {
    shippingOptions[i].addEventListener('click', function(event) {
      calcCart();
    });
  }
});

function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals,
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}
