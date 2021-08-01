//Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

//cid is a 2D array listing available currency.

//The checkCashRegister() function should always return an object with a status key and a change key.

//Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

//Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

//Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.


ffunction checkCashRegister(price, cash, cid) {
  
  // initialise variables
  let change = (cash - price) * 100;
  let initialChange = change;

  // make a deep copy of the cid array, to check conditions later
  let cidOriginal = JSON.parse(JSON.stringify(cid));


  // initialise array of currency values in cents
  let currencyValues = [
    ["ONE HUNDRED", 10000],
    ["TWENTY", 2000],
    ["TEN", 1000],
    ["FIVE", 500],
    ["ONE", 100],
    ["QUARTER", 25],
    ["DIME", 10],
    ["NICKEL", 5],
    ["PENNY", 1]
  ];

  // reverse the cid array to match currencyValues
  cid.reverse();


  // convert cash in drawer values to cents
  for (let i = 0; i < cid.length; i++) {
    cid[i][1] = Math.round(cid[i][1] * 100);
  }

  //sum total cash in drawer
  let cidTotal = 0;
  for (let i = 0; i < cid.length; i++) {
    cidTotal += cid[i][1];
  }

  // initialise an array to track change due
  let changeArray = [
    ["ONE HUNDRED", 0],
    ["TWENTY", 0],
    ["TEN", 0],
    ["FIVE", 0],
    ["ONE", 0],
    ["QUARTER", 0],
    ["DIME", 0],
    ["NICKEL", 0],
    ["PENNY", 0]
  ];

  // work through the cash in drawer, withdrawing cash and then moving to the next value
  for (let i = 0; i < cid.length; i++) {
    while (change >= currencyValues[i][1] && cid[i][1] > 0) {
      change -= currencyValues[i][1]
      cid[i][1] -= currencyValues[i][1];
      changeArray[i][1] += currencyValues[i][1];
    }
  }

  // total the amount of change
  let changeTotal = 0;
  for (let i = 0; i < changeArray.length; i++) {
    changeTotal += changeArray[i][1];
  };

  // manipulate the change array, stripping out zero values and converting from cents to dollars
  for (let i = 0; i < changeArray.length; i++) {
    if (changeArray[i][1] === 0) {
      changeArray.splice(i, 1);
      i--;
    } else {
    changeArray[i][1] = (changeArray[i][1] / 100) };
  }

  // if there is not enough change in the drawer, return
  if (changeTotal < change) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }

  // if the amount of change matches the amount in the drawer, return
  if (changeTotal == cidTotal) {
    return {status: "CLOSED", change: cidOriginal};
  }

  // else, keep the drawer open and return the changearray
  return {status: "OPEN", change: changeArray};


}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
