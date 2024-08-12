//importação de dependencias
import "dotenv/config";
import express from "express"
import conn from './config/conn.js'
//para imagem
import path from "node:path"; 
import { fileURLToPath } from "node:url"; 

//variáveis para a aplicação
const PORT = process.env.PORT;
const app = express();

//importar rotas
import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoutes.js'

//importar modelos
import "./models/userModel.js"
import "./models/postModel.js"
import "./models/postLikesModel.js"

//localizar onde está a pasta public (para imagem)

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//padroniza rotas
app.use("/user", userRoutes)
app.use("/post", postRoutes)
app.use("*", (req, res)=> {
    res.status(404).send({message: "Rota não encontrada"})
})

//começar servidor
app.listen(PORT, ()=>{
    console.log("Server on http://localhost:" + PORT)
})