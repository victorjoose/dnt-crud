const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


mongoose
.connect('mongodb+srv://zeeheb:admin@donut-cluster-16dsd.mongodb.net/dnt-crud?retryWrites=true&w=majority', { useNewUrlParser: false})
.then(() => console.log('mongodb connected !!!!!!!!!'))
.catch(err => console.log(err));



///////////// ENDPOINTS DONUT

const Donut = require('./models/Donut');


app.post('/donut', (req, res) => { 
    console.log(req.body);

    const newDonut = new Donut({
        sabor: req.body.sabor,
        preco: req.body.preco,
        descricao: req.body.descricao
    });

    newDonut.save().then(() => res.send('Donut salvo com sucesso!!'))
});


app.get('/donut', async (req, res) => { 
    const donuts = await Donut.find({});

    res.send(donuts);
})



///////////// ENDPOINTS BAGELS

const Bagel = require('./models/Bagel');


app.post('/bagel', (req, res) => { 
    console.log(req.body);

    const newBagel = new Bagel({
        sabor: req.body.sabor,
        preco: req.body.preco,
        descricao: req.body.descricao
    });

    newBagel.save().then(() => res.send('Bagel salvo com sucesso!!'))
});

app.get('/bagel', async (req, res) => { 
    const bagels = await Bagel.find({});

    res.send(bagels);
})



/////////////

const port = 3001;

app.listen(process.env.PORT || port, () => console.log('Server running ...........!!!'));