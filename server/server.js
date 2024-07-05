const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4 } = require('uuid');

const app = express();
const PORT = 5001;

app.use(bodyParser.json());
app.use(cors());

const userData = ['vikram123@gmail.com'];

function isEmailAlreadyRegistered(emailToRegister) {
    return userData.includes(emailToRegister); // Use includes() instead of some()
}

app.post('/person', (req, res) => {
    const { email } = req.body;
    if (isEmailAlreadyRegistered(email)) {
        return res.status(400).json({
            success: false,
            error: `Email ${email} is already registered`
        });
    }

    // Generate a unique ID for the new person
    const id = v4();

    // Push the new person (email) into the userData array
    userData.push(email);

    // Respond with success and person data
    res.status(200).json({
        success: true,
        person: { id, email } // Define the person object
    });
});

// Error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        error: 'Internal server error'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
