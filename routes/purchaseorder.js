import express from 'express';
import {Purchaseorder} from '../db_utils/models.js'

const purchaseOrderRoutes = express.Router();
// Create a new purchase order
purchaseOrderRoutes.post('/', async (req, res) => {
  try {
    console.log("Entering postcal")
    const purchaseOrder = new Purchaseorder(req.body);
    await purchaseOrder.save();
    res.status(201).json(purchaseOrder);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

// Get a list of all purchase orders
purchaseOrderRoutes.get('/', async (req, res) => {
  try {
    const purchaseOrders = await Purchaseorder.find();
    res.json(purchaseOrders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single purchase order by ID
purchaseOrderRoutes.get('/:id', async (req, res) => {
  try {
    const purchaseOrder = await Purchaseorder.findById(req.params.id);
    if (!purchaseOrder) {
      res.status(404).json({ error: 'Purchase Order not found' });
      return;
    }
    res.json(purchaseOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a purchase order by ID
purchaseOrderRoutes.put('/:id', async (req, res) => {
  const userId  = req.params.id;
  console.log(userId)

  try {
    const purchaseOrder1= await Purchaseorder.findOne({ order_id: userId });
    console.log(purchaseOrder1);
    if (purchaseOrder1) {
    const purchaseOrder = await Purchaseorder.updateOne({ order_id: userId }, { '$set': req.body });
    res.json("PurchaseOrder got updated successfully");
      
    }else{
      return res.status(404).json({ error: 'order not found.' });
    }
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update the order.' });
  }
});

// Delete a purchase order by ID
purchaseOrderRoutes.delete('/:id', async (req, res) => {
  const userId  = req.params.id;

  try {
    const purchaseOrder1= await Purchaseorder.findOne({ order_id: userId });
    console.log(purchaseOrder1);
    if (purchaseOrder1) {
     await Purchaseorder.deleteOne({ order_id: userId });
    res.json("product Deleted Successfully");
      
    }else{
      return res.status(404).json({ error: 'Product not found.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the product.' });
  }
});

export default purchaseOrderRoutes;