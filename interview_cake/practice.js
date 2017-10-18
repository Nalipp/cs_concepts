var text = 'outside';
function logIt(){
  console.log(text);
  let text = 'inside';
};
logIt();
