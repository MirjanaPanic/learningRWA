// Create a promise
const p = new Promise<string>((resolve, reject) => {
  const numberOfCustomers = 4;

  if (numberOfCustomers > 5) {
    resolve("Success");
  } else {
    reject("Not enough promotion");
  }
});

// Consume a promise with then() and catch()
p.then((value) => console.log(value)).catch((reason) => console.log(reason));
//resolve se hvata u then, a reject u catch

// Consume a promise with async/await & try/catch
const consume = async () => {
  try {
    const result = await p;
    console.log(result); //resolved
  } catch (reason) {
    console.log(reason); //rejected
  }
};
//resolve se hvata u try, a reject u catch
