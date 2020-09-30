const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const pass = 'FWlj1zV1TUhZoqtw';


const uri = "mongodb+srv://CrazyPythonLover:FWlj1zV1TUhZoqtw@cluster0.fgaci.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });

const app = express();

app.get('/', (req, res)=> {
    res.send('hello  I am working ')
})

app.listen(3000);



client.connect(err => {
  const collection = client.db("organicdb").collection("products");
  client.close();
});
