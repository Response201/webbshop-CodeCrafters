const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
var cors = require('cors');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors())


var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const mongoString =
    process.env.MONGO_URL || 'https://codecrafters-td9j.onrender.com/';

    mongoose.connect(mongoString);
    const database = mongoose.connection
   
    database.on('error', (error) => {
        console.log(error)
    })
    
    database.once('connected', () => {
        console.log('Database Connected');
    })

const port =  3000;


const productSchema = new mongoose.Schema({
    titel:{type:String},
    image:{type:String},
    price:{type:Number},
    description:{type:Array}
    
    })
  
  
  /* api anger vilket namn som kommer finnas i mongoDB Atlas, under cluster */
  const productModel = mongoose.model('productSchema', productSchema)
  
  app.get('/', cors(corsOptions), async (req, res) => {
    try {
      // Hämta alla dokument från databasen
      const response = await productModel.find();
  
      // Skicka tillbaka responsen som JSON om det finns några dokument
      if (response.length > 0) {
        res.json(response);
      } else {
        res.status(404).json({ message: 'Inga produkter hittades.' });
      }
    } catch (error) {
      // Hantera eventuella fel och skicka en felrespons
      res.status(500).json({message: '505'  });
    }
  });
  






app.listen(3000, () => {
    console.log(`Server Started at ${port}`)
})