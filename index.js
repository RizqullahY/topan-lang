const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');
const port = 3000;

const upload = multer();

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.post('/users', upload.none(), (req, res) => {
    const { name, email } = req.body;
    res.json({
        name,
        email,
    })
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
