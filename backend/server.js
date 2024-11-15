
import express from "express"
import "dotenv/config";
// import connectDb from "./src/db/index.js";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import EmployeeModel from "./src/models/employeeMaster.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


const PORT = process.env.PORT || 3001

app.listen(PORT,() =>{
        console.log("Server is running")
    })


mongoose.connect(process.env.MONGODB_URI)
    .then(console.log("Mongo DB connected"))
    .catch((error) => console.log("Mongo DB connection Failed", error))

    app.post('/employee',(req, res)=>{
        EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
    })

    app.get('/employee', (req, res) => {
        EmployeeModel.find() 
            .then(employees => res.status(200).json(employees)) // Respond with the list of employees
            .catch(err => res.status(500).json({ error: err.message })); // Handle errors
    });


app.get("/", (req, res) => {
    res.send("API is running....");    
    console.log("API is running....");
}); 


// connectDb()
//     .then(async()=>
    //     )    
//     .catch((error) =>{
    //         console.log("Mongo DB connection Failed", error);
    //     });

    
    
// import { MongoClient, ServerApiVersion } from "mongodb";    
// const uri = "mongodb+srv://devangsawant127:sage%409930@embedpowerbi.tkr86.mongodb.net/";
// // const uri = "mongodb://localhost:27017/Employee";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,    
//     strict: true,
//     deprecationErrors: true,
// }
// });

// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)    
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error    
//         await client.close();
//     }
// }
// run().catch(console.dir);


// app.use("/api/employee", EmployeeRouter)





