import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { validateCreditCard } from "./validator";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/validate", (req: Request, res: Response) => {
  const { cardNumber } = req.body;
  if (!cardNumber) {
    return res.status(400).json({ error: "Credit card number is required" });
  }

  const isValid = validateCreditCard(cardNumber);
  res.json({ valid: isValid });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
