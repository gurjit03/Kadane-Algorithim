function processData(input) {
    //Enter your code here
    var inputArray = input.split('\n');
    var testCase = Number(inputArray[0]);
    var counter = 1;
    for(var i = 0; i < testCase; ++i) {
        var arrLength = Number(inputArray[counter]);
        var array = inputArray[counter + 1].split(" ").map(Number);
        var max = -Infinity,
            max_cur = -Infinity,
            non_conti = -Infinity,
            result = max;
        for( var j = 0; j < arrLength; ++j) {
            max_cur = Math.max(array[j],max_cur + array[j]);
            
            var maxi_non_conti = Math.max(array[j],non_conti + array[j]);
            
            non_conti = maxi_non_conti > non_conti ? maxi_non_conti : non_conti; 
            if(max_cur > max) {
                max = max_cur;
            }
         }
        console.log(max >= max_cur ? max : max_cur , non_conti);
        counter += 2;
    }
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
