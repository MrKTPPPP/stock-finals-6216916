import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
  supplierName: String,
  address: String,
  phoneNumber: String,
});

const Supplier = mongoose.models.Supplier || mongoose.model("Supplier", supplierSchema);

export default Supplier;