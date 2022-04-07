async function hello() {
  //    return ("HELLO")
  throw "error";
}

hello()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

//---
async function wait() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject("errore");
      resolve("success");
    }, 2000);
  });
    

  try {
    let resp = await promise;
    console.log(resp);
    let run = await run()
    console.log("done");
    return resp;
  } catch (error) {
    console.log(error);
  }
}
wait();

// async function run(){

// const abc = await wait()
// console.log(abc);
// }
// run()
