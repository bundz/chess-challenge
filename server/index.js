const server = require(`./server`);
const { port } = require(`./config`)

server.listen(port, () => {
  console.log(`We are alive!`);
});

