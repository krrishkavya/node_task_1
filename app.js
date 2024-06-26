const express = require('express');
const mongoose = require('mongoose');
const app = express();
const product = require('./modules/products');
app.use(express.urlencoded({extended: true}));

//connect to mongoDB
const dbURL = 'mongodb+srv://krrishkavya:Krrkav1001@nodelearn.9iroe20.mongodb.net/';
mongoose.connect(dbURL)
 .then((result) => {
    app.listen(3000);
    console.log('Connected');
 })
 .catch((err) => {
    console.log('err');
 });


app.use(express.urlencoded({extended: true}));

app.set('view engine','ejs');

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render('./index');
});

app.get('/products',(req,res)=>{
    product.find()
    .then((result) => {
        res.render('products',{title: 'Product List', result});
    }).catch((err) => {
        console.log(err);
    });
})

app.post('/post', (req,res) =>{
    const {prod_name, prod_id, prod_desc} = req.body;
    const user = new product({
        prod_name,
        prod_id,
        prod_desc
    });
    user.save()
    console.log(user);
    res.redirect('/products');
})

app.use((req,res) => {
    res.status(404).render('error');
});