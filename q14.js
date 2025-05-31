db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "empId",     
      foreignField: "empId",    
      as: "orders"
    }
  },
  {
    $unwind: "$orders"
  },
  {
    $group: {
      _id: { empId: "$empId", name: "$name", email: "$email" },
      totalOrderValue: { $sum: "$orders.orderValue" }
    }
  },
  {
    $project: {
      _id: 0,
      name: "$_id.name",
      email: "$_id.email",
      totalOrderValue: 1
    }
  }
]);
