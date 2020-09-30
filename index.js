const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const pass = 'FWlj1zV1TUhZoqtw';


const uri = "mongodb+srv://CrazyPythonLover:FWlj1zV1TUhZoqtw@cluster0.fgaci.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });

const app = express();

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html')
})

client.connect(err => {
  const productCollection = client.db("organicdb").collection("products");
  //const product = {name:"modhu", price: 25, quantity: 20};
  
  //client.close();
});

app.listen(3000);


