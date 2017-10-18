// Return 0/1

// COLORFUL number:

// A number can be broken into different contiguous sub-subsequence parts. 
// Suppose, a number 3245 can be broken into parts like 3 2 4 5 32 24 45 324 245. 
// And this number is a COLORFUL number, since product of every digit of a contiguous subsequence is different
// Example:

// N = 23
// 2 3 23
// 2 -> 2
// 3 -> 3
// 23 -> 6
// this number is a COLORFUL number since product of every digit of a sub-sequence are different. 

// Output : 1


function isColorful(A){
  var num = String(A);
  var hash = {};

  for (var i = 1; i <= num.length; i++) {
    for (var j = 0; i + j <= num.length; j++) {
      var subNum = num.slice(j, i + j);
      sum = 1;
      for (var i = 0; i < subNum.length; i++) {
        sum *= subNum[i];
      }
      if (hash[sum]) return 0;
      hash[sum] = 1;
    }
  }
  return 1;
}

// solution

// module.exports = { 
// 	//param A : integer
// 	//return an integer
// 	colorful : function(A){
// 	    var num = String(A),
// 	        hash = {};
	    
// 	    for (var i = 0; i < num.length; i++) {
// 	        var c = 1;
// 	        for (var j = i; j < num.length; j++) {
// 	            c *= Number(num[j])
	             
// 	            if (hash[c]) {
// 	                return 0;
// 	            }
// 	            hash[c] = 1
// 	        }
// 	    }
	   
// 	   return 1;
// 	}
// };

// console.log(isColorful(2301));  // 2 3 0 1 23 30 1 230 301 2301
console.log(isColorful(23));    // 2 3 23
// console.log(isColorful(231));   // 2 3 1 23 31 231
// console.log(isColorful(12));    // 1 2 12

