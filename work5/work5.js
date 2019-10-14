//9X9的空表
// var str = '<table1>';
// for (var i=1;i<10;++i){
//     str += '<tr>';
//     for(var j = 1; j<=i;++j){
//         str +='<td>&nbsp;</td>';
//     }
//     str += '</tr>';
// }
// str += '</table>';
// document.getElementById('table1').innerHTML = str
var str = '<table border="1">'
for(let i=9;i>0;--i){
    str += '<tr>'
    for(var j=9;j>0;--j){
        str += '<td>&nbsp;</td>'
    }
    str +='</tr>'
}
str += '</table>'
console.log(str)
document.getElementById('table1').innerHTML = str
//到九九乘法空表


 str = '<table border="1">'
for(let i=9;i>0;--i){
    str += '<tr>'
    for(var j=i;j>0;--j){
        str += '<td>&nbsp;</td>'
    }
    str +='</tr>'
}
str += '</table>'
// document.getElememtById('table2').innerHTML = str
document.getElementById('table2').innerHTML = str

//到九九乘法表
str = '<table border="1">'
for(let i=9;i>0;--i){
    str += '<tr>'
    for(var j=i;j>0;--j){
        str += '<td>'+ i + '*' + j + '=' + i*j   + '</td>'
    }
    str +='</tr>'
}
str += '</table>'
// document.getElememtById('table2').innerHTML = str
document.getElementById('table3').innerHTML = str
