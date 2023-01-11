const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router');
const app = express();
const PORT = 6789;


app.use(cors());
app.use(express.json());
app.use(router);


(async function bootstrap () {
  try {
    await mongoose.connect('mongodb+srv://afia:1234@cluster0.r0trdgv.mongodb.net/?retryWrites=true&w=majority');
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));
  } catch (error) {
    console.log(error);
  }
})();