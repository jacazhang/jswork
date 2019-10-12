document.write("<p>金字塔</p>")
var level = prompt('请设置金字塔的层数')
level = parseFloat(level)&&Number(level)
if (isNaN(level)){
    alert('金字塔的层数是数字')
}
for(var i=1;i<=level;++i){
    var blank = level - i;
    for(var k=0;k<blank;++k){
        document.write('&nbsp;');
    }
    //打印星星
    var star = i * 2 - 1
    for(var j=0;j<star;++j){
        document.write('*')
    }
    //换行
    document.write("<br>")
}

var str = '<table border="1">'
for(var i=1;i<10;++i){
    str += '<tr>'
    for(var j=1;j<=i;++j){
        //；拼接单元格
        str += '<td>' + j + '*' + i + '=' + ( j * i ) + '</td>'
    }
    str += '</tr>'
}
str += '</table>'
//设置div的html文档内容
document.getElementById('table').innerHTML = str