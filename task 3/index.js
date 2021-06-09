//option 1
//bad
/*const withdraw = (clients, balances, client, amount) => {
  //put your code here
  let clientBalances = balances[clients.indexOf(client)];
  if (amount <= clientBalances) {
    clientBalances -= amount;
    balances[clients.indexOf(client)] = clientBalances;
    return clientBalances;
  } else {
    return -1;
  }
};*/

//after refactoring
/*const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);

  if (clientBalance < amount) {
    return -1;
  }

  balances[index] -= clientBalance;
  return balances[index];
};*/

//option 2

//!!! першим ділом треба робити валідацію, а потім писати логіку
//forEach майже не використовується (практично ніколи)

//very bad
/*const withdraw = (clients, balances, client, amount) => {
  let rest = 0;

  //dont use
  clients.forEach((name, index) => {
    //very bad
    if (name.includes(client)) {
      rest = balances[index] - amount;
    }
  });
  if (rest < 0) {
    return -1;
  }
  return rest;
};*/

//test data
const bal = [1400, 87, -6];
console.log(withdraw(['Ann', 'John', 'User'], 'John', 50));
console.log(bal);
