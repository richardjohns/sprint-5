////2.1 Looping a triangle
////My solution
//
//function pyramid(layer) {
//    for(var i = 0; i < 7; i++) {
//        layer += "#";
////        console.log(i);
//        console.log(layer);
//    }
//};
//
//pyramid('');
//
//
////His solution
//for (var line = "#"; line.length < 8; line += "#")
//  console.log(line);

//2.2 Fizzbuzz
//My solution

//function fizzbuzz(number) {
//    for(var i = 0; i < 100; i++) {
//        number += 1;
////        console.log(i);
//        if (number % 3 === 0 && number % 5 === 0) {console.log("FizzBuzz");}
//        else if (number % 5 === 0) {console.log("Fizz");}
//        else if (number % 3 === 0) {console.log("Buzz");}
//        else {console.log(number);};
//    }
//};
//
//fizzbuzz(0);


//His solution
//for (var n = 1; n <= 100; n++) {
//  var output = "";
//  if (n % 3 == 0)
//    output += "Fizz";
//  if (n % 5 == 0)
//    output += "Buzz";
//  console.log(output || n);
//}


//2.3 Chessboard
//My solution

//function chessboard(i) {
//    for(i = 0; i < 4; i++) {
//        console.log(" # # # #"+"\n");
//        for(var p = 0; p < 1; p++){
//            console.log("# # # # ");
//            }
//        }
//    }
//
//chessboard(0);

////His solution
//var size = 8;
//
//var board = "";
//
//for (var y = 0; y < size; y++) {
//  for (var x = 0; x < size; x++) {
//    if ((x + y) % 2 == 0)
//      board += " ";
//    else
//      board += "#";
//  }
//  board += "\n";
//}
//
//console.log(board);
