const app = require("./app");
const PORT = process.env.PORT || 3001;
require("dotenv").config();
const { conn } = require("./connection");

conn
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

