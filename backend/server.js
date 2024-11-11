
import express from "express"
import cors from "cors"
import connectDb from "./db/index.js"
import "dotenv/config";
import morgan from "morgan";
import employeeRouter from "./router/employeeRouter.js"

const app = express()
app.use(express.json())
app.use(morgan("dev"));
app.use(cors())
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

connectDb()
.then(async () =>
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
)
.catch((error) => {
    console.log("MONGO DB connection FAILED", error);
});

app.use("/api/employees", employeeRouter);



// app.listen(PORT,() =>{
//     console.log("Server is running")
// })
// mongoose.connect(process.env.MONGODB_URI)
// app.post('/register',(req, res)=>{
//     EmployeeModel.create(req.body)
//     .then(employees => res.json(employees))
//     .catch(err => res.json(err))
// })
// app.get('/employees', (req, res) => {
//     EmployeeModel.find() 
//         .then(employees => res.status(200).json(employees)) // Respond with the list of employees
//         .catch(err => res.status(500).json({ error: err.message })); // Handle errors
// });

