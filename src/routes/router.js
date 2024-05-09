import { Router } from "express";

import apiRouter from "./apiRoutes/apiRouter.js";
import viewRouter from "./viewRoutes/viewRouter.js";
import artistRouter from "./artistRouter.js";
import bandRouter from "./bandRouter.js";
import albumRouter from "./albumRouter.js";
import genreRouter from "./genreRouter.js";
import songRouter from "./songRouter.js";



import bandController from "../controllers/band/bandController.js";
import artistController from "../controllers/artist/artistController.js";
const router = Router();


router.get("/",async (req,res)=>{
    const bands = await bandController.getAll();
    const artists = await artistController.getAll();
    res.json({bands,artists});
})
router.use("/api",apiRouter);
router.use("/",viewRouter);

router.get("/",(req,res)=>{
    res.send("Hello " + process.env.APP_USERNAME)
})

router.get("/search",(req,res)=>{
    //const query = req.query.q;
    const {q,name} = req.query;
    res.send(`Mostrando resultados de la búsqueda '${q}' con el nombre ${name}`);
})

router.get("/form",(req,res)=>{
    const formString = `
    <form action="/search" method="get">
        <label for="q">pregunta</label>
        <input type="text" name="q" id="q">
        <button type="submit">enviar</button>
    </form> 
    `
    res.send(formString);   
})

router.use("/artist",artistRouter);
router.use("/band",bandRouter);
router.use("/album", albumRouter);
router.use("/genre", genreRouter);
router.use("/song", songRouter);
/* router.post("/search",(req,res)=>{
    const {}
}) */

export default router;