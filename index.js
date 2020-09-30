const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const pass = 'FWlj1zV1TUhZoqtw';

const uri = "mongodb+srv://CrazyPythonLover:FWlj1zV1TUhZoqtw@cluster0.fgaci.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html')
})

client.connect(err => {
  const productCollection = client.db("organicdb").collection("products");
  //const product = {name:"modhu", price: 25, quantity: 20};
  
  app.get('/products', (req, res) =>{
      productCollection.find({}).limit(3)
      .toArray(( err, documents ) => {
          res.send( documents)
      })
  })
  
  app.post("/addProduct", (req, res) =>{
    const product = req.body;
    productCollection.insertOne(product)
    .then(result =>{
        console.log('One product added')
        res.send("success");
    })
  })

  app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    productCollection.deleteOne({_id: ObjectId(req.params.id)})
    .then((err, result) => {
        
    })
  })
  //client.close();
});

app.listen(3000);


