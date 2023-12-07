import app from "./app.js";

const PORT = process.env.port ?? 5002;

app.listen(PORT, function () {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
