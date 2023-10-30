const loadScript = (src, check) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (check) {
        let style = document.createElement("style");
        style.textContent = `.text-3xl {
            font-size: 1.875rem;
          }
          
          .font-bold {
            font-weight: 700;
          }
          
          .underline {
            text-decoration: underline;
          }`;
        document.head.appendChild(style);
        console.log("style");

        style.onload = () => {
          resolve("Style Wala true");
        };
        style.onerror = () => {
          reject(false);
        };
      } else {
        let link = document.createElement("link");

        link.href = src;
        link.rel = "stylesheet";
        document.head.appendChild(link);
        console.log("link");
        link.onload = () => {
          resolve("Link Wala true");
        };
        link.onerror = () => {
          reject(false);
        };
      }
    }, 5000);
  });
};

let p1 = loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
  false
);
p1.then((value) => {
  console.log(value);
  return loadScript("https://cdn.tailwindcss.com", true);
})
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
