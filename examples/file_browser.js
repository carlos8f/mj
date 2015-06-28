var mj = require('mj');

// mj: share
mj.share('../..', {recursive: true, port: 3000, title: 'Michael Jackson R.I.P.'}, function (err, result) {
  if (err) return throw err;
  console.log('result');
});

