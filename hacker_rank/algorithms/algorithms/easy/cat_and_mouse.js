// 3
// catA catB mouse
// 1 2 3 Cat B
// 1 3 2 Mouse C
// 2 1 3 Cat A

x = 2;
y = 1;
z = 3;

xd = Math.abs(z - x);
yd = Math.abs(z - y);

if (xd === yd) return console.log('Mouse C'); 
console.log((xd < yd) ? 'Cat A' : 'Cat B');


