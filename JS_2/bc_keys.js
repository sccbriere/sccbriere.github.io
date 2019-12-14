"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Review Assignment

   Author: Shannie Briere
   Date: November 23, 2019

   Filename: bc_keys.js

   Functions
   =========

   findKeyWords()
      Locate the keywords in the article indicated by the <dfn> tag
      and add those keywords in alphabetical order to a keyword box.

   makeKeyStyles()
      Create an embedded style sheet for the keyword box.


   replaceWS(textStr)
      Replaces occurences of one or more consecutive white space
      characters with the _ character.

*/
//step 3
//add event listener for load event to run the findKeyWords function
window.addEventListener('load', findKeyWords);




//add event listener for load event to run the makeKeyStyles function
window.addEventListener('load', makeKeyStyles);

//step 4
//create function to find the key words
function findKeyWords() {
  keyWordBox;

   //step 5
   // Create a variable keyWordBox that represents an aside element
   var keyWordBox = document.createElement('aside');


   //use setAttributes to assign id of "keywords" to keyWordBox element
   keyWordBox.setAttribute("id","keywords");

   //create a variable keyWordTitle that represents an h1 element
   var keyWordTitle = document.createElement('h1');


   //assign "Keyword List" to the innerHTML of keyWordTitle
   keyWordTitle.innerHTML="Keyword List";

   //make keyWordTitle element a child of the keyWordBox element
   keyWordBox.appendChild(keyWordTitle);


   //step 6
   // Place the keywords in an ordered list
   //create a variable keyWordList that represents an ol element
   var keyWordList = document.createElement('ol');


   //make keyWordList element a child of keyWordBox element
   keyWordBox.appendChild(keyWordList);


   //step 7 done
   // Locate all of the keywords in the source document
   var keyWordElems = document.querySelectorAll("article#doc dfn");

   //create the array keyWords to be the same length as the keyWordElems collection
   var keyWords = new Array(keyWordElems.length);



   //set up a for loop to iterate through all elements of the keyWordElems collection
   for (var i = 0; i < keyWordElems.length; i++) {
      //step 7a
      //assign the textContent of keyWordElems to the next element of keyWords array
      keyWords[i]=keyWordElems[i].textContent;


      //step 7b done
      var linkID = replaceWS(keyWords[i]);
      linkID = "keyword_" + linkID;

      //step 7c
      //use setAttributes to assign id of keyWordElems[i] to linkID
      keyWordElems[i].setAttribute("id", linkID);

   }

   //step 8 done
   // Sort the keywords in alphabetical order
   keyWords.sort();

   //step 9
   for (var i = 0; i < keyWords.length; i++) {
      //step 9a
      //create variable keyWordListItem that represents an li element
      var keyWordListItem = document.createElement('li');


      //step 9b
      //create variable keyWordLink that represents an a element
      var keyWordLink=document.createElement('a');



      //step 9c
      //assign innerHTML of keyWordLink to keyWords[i]
      keyWordLink.innerHTML = keyWords[i];


      //step 9d done
      //create variable linkID using replaceWS function
      var linkID = replaceWS(keyWords[i]);
      linkID = "#" + "keyword_" + linkID;

      //step 9e
      //use setAttributes to assign href to linkID
      keyWordLink.setAttribute("href", linkID);


      //step 9f make keyWordLink a child of keyWordListItem
      keyWordListItem.appendChild(keyWordLink);


      //make keyWordListItem a child of keyWordList
      keyWordList.appendChild(keyWordListItem);

   }

   //step 10
   // create variable historyDoc that represents the article element
   // in the document with the id "doc"
   var historyDoc = document.getElementById('doc');



   //use insertBefore to make keyWordBox the first child of historyDoc
   historyDoc.insertBefore(keyWordBox, historyDoc.firstChild);
}


//step 11 this is already complete for you
function makeKeyStyles() {
   // Append an embedded style sheet to the document head
   var keyStyles  = document.createElement("style");
   document.head.appendChild(keyStyles);

   // Add style rules to the embedded style sheet

   document.styleSheets[document.styleSheets.length-1].insertRule(
      "aside#keywords { \
         border: 3px solid rgb(101, 101, 101); \
         float: right; \
         margin: 20px 0px 20px 20px; \
         padding: 10px; \
         width: 320px; \
      }",0);

   document.styleSheets[document.styleSheets.length-1].insertRule(
      "aside#keywords h1 { \
         font-size: 2em; \
         margin: 5px; \
         text-align: center; \
      }", 1);

   document.styleSheets[document.styleSheets.length-1].insertRule(
      "aside#keywords ol { \
         margin-left: 20px; \
         font-size: 1.2em; \
      }", 2);

   document.styleSheets[document.styleSheets.length-1].insertRule(
      "aside#keywords ol li { \
         line-height: 1.5em; \
      }", 3);

   document.styleSheets[document.styleSheets.length-1].insertRule(
      "aside#keywords ol li a { \
         color: rgb(101, 101, 101); \
         text-decoration: none; \
      }", 4);
}



/* Supplied Functions */

function replaceWS(textStr) {
   var revText = textStr.replace(/\s+/g,"_");
   return revText;
}






/* Supplied Functions */

function replaceWS(textStr) {
   var revText = textStr.replace(/\s+/g,"_");
   return revText;
}
