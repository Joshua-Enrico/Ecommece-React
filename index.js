const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');


dotenv.config();

mongoose.connect(process.env.MONGO_URL).
    then(() => console.log('Connected to MongoDB')).catch(err => console.log('Error: ', err));

    app.get("/api/test", () => {
        console.log("Api Test Successful");
    })

// Api Routes
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

// Auth Routes ends here

app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port ' + process.env.PORT);
});