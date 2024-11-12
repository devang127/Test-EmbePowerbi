
import express from "express"
import "dotenv/config";
// import connectDb from "./src/db/index.js";
import cors from "cors";
import morgan from "morgan";
import EmployeeRouter from "./src/router/employeeRouter.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));


const PORT = process.env.PORT || 8000;

app.listen(PORT,() =>{
    console.log(`Server is running on ${PORT}`);
})

app.get("/", (req, res) => {
    res.send("API is running....");
}); 

// connectDb()
//     .then(async()=>
//     )
//     .catch((error) =>{
//         console.log("Mongo DB connection Failed", error);
//     });



import { MongoClient, ServerApiVersion } from "mongodb";
const uri = "mongodb+srv://devangsawant127:chamber9930@cluster0.tvpzs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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


app.use("/api/employees", EmployeeRouter)





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

