import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import loanRoutes from "./routes/loanRoutes";
import creditRoutes from "./routes/creditRoutes";
import paymentRoutes from "./routes/paymentRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/loan", loanRoutes);
app.use("/api/user", creditRoutes);
app.use("/api/payment", paymentRoutes);

app.get("/", (req: Request, res: Response): Response => {
return res.status(200).json({
message: "Loan Eligibility Backend Running",
});
});

const PORT: number = Number(process.env.PORT) || 5100;

app.listen(PORT, (): void => {
console.log(`Server running on port ${PORT}`);
});