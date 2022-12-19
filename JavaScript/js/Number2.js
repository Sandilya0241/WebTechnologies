let price = 1.1 + 1.3;
// above value results in 2.4000000000000004 which is very very very tiny bit more that actual result (2.4)
showMessage(price);

price = 20 - -2;
showMessage(price);

price = 20 - (-2);
showMessage(price);

price = 0;
showMessage(--price);