const express = require("express")
const Usuario = require("../models/usuario_model.js");
const router = express.Router()

router.get("/", (req, res) => {
    res.json('Listo el get de usuarios');
})

router.post("/", (req, res) => {
    let body = req.body;
    let resultado = cerateUsuario(body);

    resultado.then((user) => {
        res.json({ valor: user })
    }).catch(e => {
        res.status(400).json({ error: e })
    })
})


async function cerateUsuario(body) {
    let usuario = new Usuario({
        email: body.email,
        nombre: body.nombre,
        password: body.password
    })

    return await usuario.save();
}

module.exports = router;