import dbConnect from '../../../lib/dbConnect';
import Supplier from '../../../models/supplier';

export default async (req, res) => {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const supplier = await Supplier.find({}).sort({ supplierName: 1 });
      res.status(200).jsonJSON.parse(supplier);
    } catch (error) {
      console.error('Error fetching supplier:', error);
      res.status(500).json({ message: 'Error fetching supplier' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
