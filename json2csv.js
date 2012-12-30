var fs = require('fs');
// var process = require('process');

if (process.argv[2] == null) {
  console.log('please give the filename');
  process.exit(1);
}

fs.readFile(process.cwd() + '/' + process.argv[2], function (err, file) {
  var data = JSON.parse(file);
  console.log(data);

  var oToLine = function (o) {
    var s = '';
    for (var k in o) {
      s += '"' + o[k] + '"' + ',';
    }
    s += '\n';
    return s;
  };

  var out = '';
  for (var k in data) {
    out += ':::' + k + ':::\n\n';
    if (Array.isArray(data[k])) {
      var arr = data[k];
      arr.forEach(function (item, _) {
        out += oToLine(item); 
      });
    }
  }
  console.log(out);

  fs.writeFile(process.cwd() + '/' + process.argv[2].slice(0, process.argv[2].lastIndexOf('.')) + '.csv', out, function (err) {
    console.log('write done');
  });
});
