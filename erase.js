const idk = () => {
  let result = 0;
  for (let i = 1; i <= 1536; i++) {
    if (String(i).includes("6")) {
      result += String(i)
        .split("")
        .filter((val) => val === "6").length;
    }
  }
  return result;
};

console.log(idk());
