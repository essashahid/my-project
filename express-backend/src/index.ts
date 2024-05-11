import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/api/predict", async (req: Request, res: Response) => {
  try {
    const response = await axios.post(
      "http://localhost:5002/predict",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error communicating with Flask");
  }
});

app.listen(5001, () => {
  console.log("Express server running on port 5001");
});
