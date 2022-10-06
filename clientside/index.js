const express = require("express");
const app = express();
const axios = require("axios");
const uploadOnMemory = require("./uploadOnMemory");
const cloudinary = require("./cloudinary");
const port = 4242;


app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.set('view engine', 'ejs');


app.get('/', async (req, res) => {
    res.render('cars.ejs');
})

app.get('/list-cars', async (req, res) => {
    try {
        const cars = await axios.get('http://localhost:2424/listCars');
        res.render('list_cars.ejs', cars.data)
    } catch (err) {
        res.status(500).json(err)
    }
})

app.get('/add-new-car', (req, res) => {
    res.render('add_cars.ejs')
})

app.post(
    "/add-new-car",
    uploadOnMemory.single("picture"),
    (req, res) => {
        const fileBase64 = req.file.buffer.toString("base64");
        const file = `data:${req.file.mimetype};base64,${fileBase64}`;

        cloudinary.uploader.upload(file, {
            folder: 'image'
        }, async function (err, result) {
            if (!!err) {
                console.log(err);
                return res.status(400).json({
                    message: "Gagal upload file!",
                });
            }

            const body = req.body;
            body.image = result.url;
            try {
                const cars = await axios.post('http://localhost:2424/addCar', body);
                return res.redirect('/list-cars')
            } catch (err) {
                return res.status(500).json(err)
            }
        });
    }
);

app.get('/update-car-information/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const cars = await axios.get(`http://localhost:2424/updateCar/${id}`);
        res.render('edit_cars.ejs', cars.data)
    } catch (err) {
        res.status(500).json(err)
    }
})

app.post(
    "'/update-car-information/:id",
    uploadOnMemory.single("picture"),
    (req, res) => {
        const fileBase64 = req.file.buffer.toString("base64");
        const file = `data:${req.file.mimetype};base64,${fileBase64}`;

        cloudinary.uploader.upload(file, {
            folder: 'image'
        }, async function (err, result) {
            if (!!err) {
                console.log(err);
                return res.status(400).json({
                    message: "Gagal upload file!",
                });
            }

            const id = req.params.id;
            const body = req.body;
            body.image = result.url;
            try {
                const cars = await axios.put(`http://localhost:2424/updateCar/${id}`, body);
                return res.redirect('/list-cars')
            } catch (err) {
                return res.status(500).json(err)
            }
        });
    }
);

app.get('/delete-car/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const cars = await axios.delete(`http://localhost:2424//deleteCar/${id}`);
        res.redirect('/list-cars')
    } catch (err) {
        res.status(500).json(err)
    }
})

app.listen(port, () => {
    console.log("Client listening on http://localhost:%d", port);
});