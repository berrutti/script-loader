const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/version", (_, res) => {
  setTimeout(() => res.send("x.y.z"), 150);
});

app.listen(PORT, () =>
  console.log(`Server listening on port: http://localhost:${PORT}/`)
);
