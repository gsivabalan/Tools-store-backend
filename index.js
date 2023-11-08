import express from "express";
import connectToDb from "./db_utils/mongoos-connection.js";
import productRoutes from "./routes/productDetails.js";
import purchaseOrderRoutes from "./routes/purchaseorder.js"
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 5050;

app.use(express.static('public'));
app.use(express.json());

app.use(cors());
// Use your API routes

app.use('/api/purchaseorders', purchaseOrderRoutes);

app.use('/api/products', productRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectToDb(); 
});