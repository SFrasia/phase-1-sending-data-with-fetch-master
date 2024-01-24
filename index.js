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
  .then(function (object) {
    document.write(object.id);
  })
  .catch(function (error) {
    alert("Bad things! Ragnarők!");
    document.write(error.message);
    console.log(error.message);
  });

submitData();
