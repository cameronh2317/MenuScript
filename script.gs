/* 
Author: Robert Dalin - Robert.Dalin@gmail.com 
repository: https://github.com/rdalin82/MenuScript.git 
Copyright (c) 2016 Robert Dalin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


*/

function changeName(){
  var ss = SpreadsheetApp.getActive();
  var name = ss.getName().valueOf();
  ss.rename(timeStamp() + " " + strippedName(name) );
}

function strippedName(name){
  var newName;
  if (name.match(/(\d\d-\d\d-\d\d\d\d \d\d:\d\d:\d\d)/)) {
    newName = name.replace(/(\d\d-\d\d-\d\d\d\d \d\d:\d\d:\d\d)/, ""); 
    return newName;
   } else {
    return name   
  }
}



function zeroPadding(num) {
  if (num < 10) {
    return "0" + num;
  }
  else {
    return num;
  }
}
function timeStamp(){
  var stamp;
  var date = new Date();
  var mon = zeroPadding(date.getMonth()+1);
  var day = zeroPadding(date.getDate());
  var year = date.getYear();
  var hours = zeroPadding(date.getHours());
  var min = zeroPadding(date.getMinutes());
  var sec = zeroPadding(date.getSeconds());
  stamp = mon + "-" + day + "-" + year + " " + hours + ":" + min + ":" + sec;
  return stamp;
}

function onOpen(){
  SpreadsheetApp.getUi().createMenu('TimeStamp').addItem('Rename with timestamp', 'changeName').addToUi();
}
    
