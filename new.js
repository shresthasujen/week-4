function fetchData() {
  console.log("Fetching data...");
  setTimeout(() => {
    console.log("Data fetched!");
    const data = { name: "John", age: 30 };
    console.log(data);
  }, 2000);
}
fetchData();
console.log("Fetching data, please wait..");
