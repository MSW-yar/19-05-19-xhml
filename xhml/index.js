// let xhr = new XMLHttpRequest();
// xhr.open("POST", "https://jsonplaceholder.typicode.com/posts"); //ye bataing k ready to send.
// xhr.setRequestHeader("Content-Type", "application/json"); //bataing k kis format mein hai data
// xhr.send(
//   JSON.stringify({
//     name: "MSW-yar"
//   })
// );
// xhr.onloadend = function(e) {
//   let res = JSON.parse(xhr.response); //content coming in json converting to js.
//   console.log(res);
// };
// xhr.onprogress = function(r) {
//   console.log(r);
// };
axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
