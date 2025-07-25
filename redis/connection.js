const { createClient } = require('redis');
const client = createClient({ url: process.env.REDIS_CONNECT });
client.connect();

client.on("connect", ()=> {
    console.log("redis client connected!!");
})
module.exports = client;