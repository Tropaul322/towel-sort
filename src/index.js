module.exports = function towelSort (matrix) {
  if (matrix == undefined){
    return [];
}
var b = [];
for (i=0;i<matrix.length;i++){
  if (i%2 == 0){
  for (y=0;y<matrix[i].length; y++){
      b.push(matrix[i][y])
  }
}else {
  for (var y=matrix[i].length-1; y >= 0; y--){
      b.push(matrix[i][y])
  }
}
}
return b
}
