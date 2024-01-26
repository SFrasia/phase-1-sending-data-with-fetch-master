// Add your code here
function submitData(name, email) {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: `${name}`,
      email: `${email}`,
    }),
  };
}

return fetch("http://localhost:3000/users", configurationObject)
  .then((res) => res.json)
  .then(function (obj) {
    document.write(obj.id);
  })
  .catch(function (err) {
    alert("Bad things! Ragnarők!");
    document.write(err.message);
    console.log(err.message);
  });

submitData();
