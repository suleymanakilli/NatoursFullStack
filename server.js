const app = require('./app');
const dotenv = require('dotenv');

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})

dotenv.config({ path: './config.env' });