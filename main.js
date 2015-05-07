var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var chunk = function(arr, num) {
    var results = [];
    for(var i = 0; i < arr.length; i+=num) {
        var tempArr = arr.slice(i, i+num);
        results.push(tempArr);
    }
    return results;
};