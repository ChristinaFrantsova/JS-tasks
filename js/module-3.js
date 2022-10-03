//                                 Задача 1

// ? Напиши скрипт управління особистим кабінетом інтернет-банку.
// ? Є об'єкт account, в якому необхідно реалізувати методи для роботи
//  з балансом та історією транзакцій.
// ? Типів транзацький лише два:
// ? Можна покласти чи зняти гроші з рахунку.
// ? Кожна транзакція це об'єкт із властивостями: id, type та amount

// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };
// const account = {
//     balance: 0,
//     transactions: [],

//     createTransaction(amount, type){
//         return {
//             amount,
//             type,
//             id: Math.round(Math.random()*6554)
//         }
//     },
//     deposit(amount){
//         this.balance += amount
//         this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT))
//     },
//     withdraw(amount){
//         if(this.balance>= amount){
//             this.balance -= amount
//             this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW))
//         }else{
//             console.log('Недостатньо коштів')
//         }
//     },
//     getBalance(){
//         return this.balance
//     },
//     getTransactionHistory(){
//         return this.transactions
//     },
//     getTransactionDetails(id){
//         for(let transaction of this.transactions){
//             if(transaction.id === id){
//                 return transaction
//             }
//         }
//         return 'Такої транзакції не існує'
//     }
// }
// ------------------------------------Доповнення до задачі та що вище------------------------------

// ? Додайте об'єкту обліковий запис методами записом (натисканням, навипадком, наError) і deposit(натисканням, надослідження, навідповідь),
// ? де перший параметр це сума операції, а другий і третій - колбеки.
// ? Метод withdraw викликає:
// ? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`) якщо amount більше TRANSACTION_LIMIT
// ? onError(`Amount can't exceed account balance of ${this.balance} credits`) якщо amount більше this.balance
// ? інакше знімаємо гроші з балансу і викликаємо onSuccess(`Account balance: ${this.balance}`)
// ? Метод deposit викликає:
// ? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`) якщо amount більше TRANSACTION_LIMIT
// ? onError(`Amount must be more than 0 credits`) якщо amount менше або дорівнює нулю
//     ? інакше додаємо до балансу amount і викликаємо onSuccess(`Account balance: ${this.balance}`)

//     const account = {
//   balance: 0,
//   transactions: [],
//   createTransaction(amount, type) {
//     return {
//       amount,
//       type,
//       id: Math.random() * 6554
//     };
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > transactionLimit) {
//       onError(`Amount should not exceed ${transactionLimit} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   withdraw(amount, onSuccess, onError) {
//     if (amount > transactionLimit) {
//       onError(`Amount should not exceed ${transactionLimit} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   getBalance() {
//     return this.balance;
//   },
//   getTransactionHistory() {
//     return this.transactions;
//   },
//   getTransactionDetails(id) {
//     for (let transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return 'Такої транзакції не існує';
//   }
// };

// const handleSuccess = (message) => console.log(`✅ Success! ${message}`);

// const handleError = (message) => console.log(`❌ Error! ${message}`);

//                                         Задача 2
// ? У нас є об'єкт salaries із зарплатами:
// ? Створіть функцію topSalary (salaries), яка повертає ім'я найдорожчого працівника.
// ? Якщо об'єкт salaries порожній, потрібно повернути null.
// ? Якщо кілька високооплачуваних співробітників можна повернути будь-якого з них.
// -------------- Вивели найдорожчого працівника у вирішенні --------------
// ? P.S. Використовуйте Object.entries та деструктурування, щоб перебрати пари ключ/значення.

// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function topSalary(salaries) {
//   const salariesArr = Object.entries(salaries);
//   // console.log(test);
//   let topSal = 0;
//   let topName = "";
//   for (const salary of salariesArr) {
//     // console.log(salary)

//     let [name, value] = salary;
//     // console.log(name)
//     // console.log(value)

//     if (value > topSal) {
//       topSale = value;
//       topName = name;
//     }
//   }
//   console.log(topSale, topName);
// }
// topSalary(salaries);

// Задача 3 ПОЛІНДРОМ

// 1 спосіб
// function palindrom() {
//   let str = prompt("Введіть рядок").toLowerCase().replaceAll(" ", "");
//   let reversedStr = "";
//   console.log(str);
//   //   console.log(str.toLowerCase());
//   //   str = str.toLowerCase();
//   for (let i = str.length - 1; i >= 0; i -= 1) {
//     reversedStr += str[i];
//     // console.log(reversedStr);
//   }
//   if (reversedStr === str) {
//     console.log("Це паліндром");
//   } else {
//     console.log("Це не паліндром");
//   }
// }

// 2 спосіб
// function palindrom() {
//   let str = prompt("Введіть рядок").toLowerCase().replaceAll(" ", "");
//   let reversedStr = str
//     .toLowerCase()
//     .replaceAll(" ", "")
//     .split("")
//     .reverse()
//     .join("");
//   return reversedStr === str
//     ? console.log("Це паліндром")
//     : console.log("Це не паліндром");
// }
// console.log(palindrom());
// А Роза упала на лапу Азора

//             Модуль №3 task 16/41
