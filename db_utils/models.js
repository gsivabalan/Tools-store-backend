import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  product_id: {
    type:  String,
    required: true,
    unique: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  supplier: {
    type: [String],
    required: true,
  },
  category_name: {
    type: String,
    required: true,
  },
  overallreview: {
    type:  String,
    required: true,
  },
});

export const Product = mongoose.model("Product", productSchema);

const purchaseorderSchema = new mongoose.Schema({
  order_id: {
    type: String,
    required: true,
  },
  vendor: {
    type: String,
    required: true,
  },
  order_date: {
    type: Date,
    required: true,
  },
  items: [
    {
      product_id: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      unit_price: {
        type: Number,
        required: true,
      },
    },
  ],
});

export const Purchaseorder = mongoose.model("PurchaseOrder", purchaseorderSchema);

const salesOrderSchema = new mongoose.Schema({
  order_id: {
    type: String,
    required: true,
  },
  customer: {
    type: String,
    required: true,
  },
  order_date: {
    type: Date,
    required: true,
  },
  items: [
    {
      product_id: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      unit_price: {
        type: Number,
        required: true,
      },
    },
  ],
});

const defectitemSchema = new mongoose.Schema({
  item_id: {
    type: String,
    required: true
  },
  product_id: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date_reported: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

export const Defectitem = mongoose.model('DefectItem', defectitemSchema);

export  const SalesOrder = mongoose.model("SalesOrder", salesOrderSchema);





