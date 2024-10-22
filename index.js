import express from "express";

const app = express();
const PORT = 3423;

app.use(express.json());

app.get("/", (req, res) => {
  const tabuada = req.query.tabuada ? parseInt(req.query.tabuada) : 1;
  const sequencia = req.query.sequencia ? parseInt(req.query.sequencia) : 10;

  let tabelaHTML = `<h1>Tabuada do ${tabuada}</h1>`;
  tabelaHTML += "<ul>";
  for (let i = 1; i <= sequencia; i++) {
    tabelaHTML += `<li>${tabuada} x ${i} = ${tabuada * i}</li>`;
  }
  tabelaHTML += "</ul>";

  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tabuada</title>
    </head>
    <body>
        ${tabelaHTML}
        <form method="GET" action="/">
            <label for="tabuada">Número da tabuada:</label>
            <input type="number" id="tabuada" name="tabuada" value="${tabuada}" min="1">
            <br>
            <label for="sequencia">Quantidade de multiplicações:</label>
            <input type="number" id="sequencia" name="sequencia" value="${sequencia}" min="1">
            <br><br>
            <input type="submit" value="Gerar Tabuada">
        </form>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log("Server running at: ", PORT);
});
