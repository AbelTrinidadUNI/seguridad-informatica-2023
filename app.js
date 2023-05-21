const express = require('express');
const mongoose = require("mongoose");

const usuarios = require("./routes/usuarios.js")


const mongoURL = "mongodb+srv://api-user:HPdhJ0UJY5UKr0M8@cluster0.gnwci1m.mongodb.net/?retryWrites=true&w=majority"; // Reemplaza con tu URL de conexión


// Conectamos a la BD
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true, 
    //useFindAndModify: false 
}).then(() => console.log("Conectado a MongoDB"))
    .catch(err => console.log("No se pudo conectar con MongoDB..", err));



const app = express();


const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(cors());

const corsOptions = {
    origin: '*'
};

app.use(cors(corsOptions));



app.use("/api/usuarios", usuarios)

// Ruta para entregar archivos estáticos
app.use('/cdn', express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));















/*
const { MongoClient , ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://api-user:HPdhJ0UJY5UKr0M8@cluster0.gnwci1m.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);


app.get('/api/sales', async (req, res) => {
    console.log("get")
    await MongoClient.connect(uri, async (err, client) => {
        if (err) {
            console.error('Error al conectar a la base de datos:', err);
            res.status(500).json({ error: 'Error al conectar a la base de datos' });
            return;
        }
        const db = await client.db(); // Si no tienes especificada una base de datos en la URL de conexión, usa client.db('nombre_base_datos')

        await db.collection('sales').find().toArray((err, users) => {
            if (err) {
                console.error('Error al obtener usuarios:', err);
                res.status(500).json({ error: 'Error al obtener usuarios' });
                return;
            }

            res.json(users);
        });
    });
});*/












/* app.get('/api/users', (req, res) => {
    MongoClient.connect(mongoURL, (err, client) => {
        if (err) {
            console.error('Error al conectar a la base de datos:', err);
            res.status(500).json({ error: 'Error al conectar a la base de datos' });
            return;
        }

        const db = client.db(); // Si no tienes especificada una base de datos en la URL de conexión, usa client.db('nombre_base_datos')

        db.collection('sales').find().toArray((err, users) => {
            if (err) {
                console.error('Error al obtener usuarios:', err);
                res.status(500).json({ error: 'Error al obtener usuarios' });
                return;
            }

            res.json(users);
        });
    });
});


app.get('/', (req, res) => res.send('Hello World!'));
app.get('/:cookie', (req, res) => {
    const cookie = req.params.cookie;
    console.log(cookie)
    res.send('Hello World!')
});

app.post('/', (req, res) => {
    const datos = req.body;

    console.log(datos)

    res.send('Respuesta exitosa');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`)); */