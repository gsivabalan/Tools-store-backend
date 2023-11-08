import express from "express";
import { Product } from "../db_utils/models.js";

const productRoutes = express.Router();

// Create a new product
productRoutes.post("/", async (req, res) => {
  try {
    const cproduct = new Product(req.body);
    await cproduct.save();
    res.status(201).json({ msg: "Product added Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not create the product." });
  }
});

// Retrieve a list of products
productRoutes.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not retrieve products." });
  }
});

// Update a product
productRoutes.put("/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const product1 = await Product.findOne({ product_id: userId });

    if (product1) {
      await Product.updateOne({ product_id: userId }, { $set: req.body });
      res.json({ msg: "Product Updated Successfully" });
    } else {
      return res.status(404).json({ error: "Product not found." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not update the product." });
  }
});

productRoutes.get("/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const product1 = await Product.findOne({ product_id: userId });
    if (product1) {
      res.json(product1);
    } else {
      return res.status(404).json({ error: "Product not found." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not update the product." });
  }
});

// Delete a product
productRoutes.delete("/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const product1 = await Product.findOne({ product_id: userId });

    if (product1) {
      await Product.deleteOne({ product_id: userId });
      res.json("product Deleted Successfully");
    } else {
      return res.status(404).json({ error: "Product not found." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not delete the product." });
  }
});

export default productRoutes;
