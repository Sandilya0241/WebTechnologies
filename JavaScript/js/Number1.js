let price = '20.99';
showMessage(typeof price); // This show as String on screen

price = 20.99;
showMessage(typeof price); // This show as Number on screen

price = price + 1;
showMessage(price);

price = price - 2;
showMessage(price);

price = 12;
price = price * 3;
showMessage(price);

price = price / 4;
showMessage(price);

price = price % 5;
showMessage(price);

price += 5;
showMessage(price);

let taxRate = 0.07;
showMessage(price * taxRate);

showMessage(--price);

showMessage(price++);
console.log(price);

price = (3 + 2) * 2;
showMessage(price);