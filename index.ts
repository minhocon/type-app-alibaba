import express, {Request, Response} from 'express'

const app = express()

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.json({
        response: "pong"
    })
})

app.listen(5050, () => {
    console.log("listening on 5050")
})