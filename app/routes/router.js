const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/index", {
    retorno: null,
    valores: {
      primeiraNota: "",
      segundaNota: "",
    },
  });
});

router.post("/media", (req, res) => {
  const primeiraNota = parseFloat(req.body.nota1);
  const segundaNota = parseFloat(req.body.nota2);
  let conceito = "";

  const media = (primeiraNota + segundaNota) / 2;

  if (media <= 4) {
    conceito = "E";
  } else if (media > 4 && media <= 6) {
    conceito = "D";
  } else if (media > 6 && media <= 7.5) {
    conceito = "C";
  } else if (media > 7.5 && media <= 9) {
    conceito = "B";
  } else {
    conceito = "A";
  }

  const objetoJson = {
    primeiraNota: primeiraNota,
    segundaNota: segundaNota,
    media: media,
    conceito: conceito,
  };

  res.render("pages/index", {
    retorno: objetoJson,
    valores: {
      primeiraNota: primeiraNota,
      segundaNota: segundaNota,
    },
  });
});

module.exports = router;
