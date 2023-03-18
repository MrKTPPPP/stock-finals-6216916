import nextConnect from "next-connect";
import { ObjectID } from "mongodb";
import dbConnect from "../../../lib/dbConnect";

const handler = nextConnect();

handler.get(async (req, res) => {
  const { db } = await dbConnect();
  const supplier = await db.collection("suppliers").findOne({ _id: new ObjectID(req.query.id) });
  res.json(supplier);
});

handler.put(async (req, res) => {
  const { db } = await dbConnect();
  const updatedSupplier = req.body;
  await db.collection("suppliers").updateOne({ _id: new ObjectID(req.query.id) }, { $set: updatedSupplier });
  res.status(200).json({ message: "Supplier updated successfully." });
});

handler.delete(async (req, res) => {
  const { db } = await dbConnect();
  await db.collection("suppliers").deleteOne({ _id: new ObjectID(req.query.id) });
  res.status(200).json({ message: "Supplier deleted successfully." });
});

export default handler;
