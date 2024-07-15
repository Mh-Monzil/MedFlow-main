const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const corseOption = {
  origin: ["http://localhost:5173", "https://medflow-d477b.web.app"],
  credentials: true,
};
app.use(cors(corseOption));
app.use(express.json());

const uri = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@cluster0.goboxhh.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection

    const database = client.db("medflow");

    const userCollection = database.collection("users");
    const appointmentCollection = database.collection("doctors");
    const bookedAppointmentCollection =
      database.collection("bookedAppointment");

    app.post("/user", async (req, res) => {
      const user = req.body;
      console.log(user);
      const query = { email: user?.email };

      const isExist = await userCollection.findOne(query);
      if (isExist) return res.send(isExist);

      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    //get user

    app.get("/users", async (req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    });
    //get a single user

    app.get("/user/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await userCollection.findOne(query);
      res.send(result);
    });

    //get appointment
    app.get("/appointments", async (req, res) => {
      const result = await appointmentCollection.find().toArray();
      res.send(result);
    });

    // save booked appointment data
    app.post("/booked-appointment", async (req, res) => {
      const appData = req.body;
      const id = appData.appointmentId;
      const query = { appointmentId: id };
      const isExist = await bookedAppointmentCollection.findOne(query);
      if (isExist) return res.send({ message: "Appointment already exists" });
      const result = await bookedAppointmentCollection.insertOne(appData);
      res.send(result);
    });

    app.get("/booked-appointments", async (req, res) => {
      const result = await bookedAppointmentCollection.find().toArray();
      res.send(result);
    });

    //get booked appointment for specific user
    app.get("/booked-appointment/:email", async (req, res) => {
      const email = req.params.email;
      const query = { patientEmail: email };
      const result = await bookedAppointmentCollection.find(query).toArray();
      res.send(result);
    });

    // delete booked appointment by user 
    app.delete("/my-appointment/:id", async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await bookedAppointmentCollection.deleteOne(query);
      res.send(result);
    })

    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", async (req, res) => {
  res.send("Medflow is running");
});
app.listen(port, () => {
  console.log(`The server is running from ${port}`);
});
