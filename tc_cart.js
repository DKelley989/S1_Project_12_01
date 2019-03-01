"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Dylan Kelley
   Date:   2.27.19
   
   Filename: tc_cart.js
	
*/

// Variable for order total set to 0.
var orderTotal = 0;

// Variable cartHTML assigned to a string of elements used to create a table.
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

// For loop that runs through each item until the iteration variable is not less than item.length.
for (var i = 0; i < item.length; i++) {
   // Concatenates cartHTML variables with strings of text to generate elements for the table.
   cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "'/></td>";
   cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";
   // Variable itemCost is assigned to item price * item quantity.
   var itemCost = itemPrice[i] * itemQty[i];
   // Displays itemCost in a table data cell.
   cartHTML += "<td>$" + itemCost + "</td></tr>";
   // Sets order total to the sum of itemCost determined by the loop.
   orderTotal += itemCost;
}

// Creates a column span of 4 with the text "Subtotal" and the order total in last cell.
cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>";

// Sets the HTML to an element with the id of "cart".
document.getElementById("cart").innerHTML = cartHTML;