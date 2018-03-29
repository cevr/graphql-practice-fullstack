const app = require('express')();

const PORT = 4000;
const IP = require('./ipHandler').ip;

app.listen(PORT, () => {
    console.log(`local: http://${IP}:${PORT}`);
    console.log(`local: http://localhost:${PORT}`);
    console.log(`graphiql: http://localhost:${PORT}/graphql`);
});
