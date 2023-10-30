let data = fetch("https://chroniclingamerica.loc.gov/newspapers.json", { timeout: 5000 }); // 5-second timeout

data
  .then((value) => {
    // if (!value.ok) {
    //   throw new Error(`HTTP error! Status: ${value.status}`);
    // }
    console.log(value.status);
    console.log(value.ok);
    return value.text();
  })
  .then((jsonData) => {
    console.log(jsonData);
    // console.log(SIZE(jsonData))
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
