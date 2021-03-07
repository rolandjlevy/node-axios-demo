

const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.post('/test', (req, res) => {
  const name = req.body.name;
  console.log(`Got ${name}`);
});

const server = app.listen(3000, (n) => {
  console.log({server, obj:this})
  console.log('Listening on port %s', server.address().port);
  ;(async () => {
    axios.post('https://node-axios-demo.rolandjlevy.repl.co/test', {
      name:'Roland'
    })
  })();
});

const axios = require('axios');

const getBreeds = async () => {
  return await axios({
    url: 'https://dog.ceo/api/breeds/list/all'
  });
}

(async () => {
  const breeds = await getBreeds();
  // console.log(breeds);
})();