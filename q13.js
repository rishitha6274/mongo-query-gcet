db.orders.insertMany([
  {
    empId: ObjectId("68372843c8f8ecee66fce74b"),
    items: { "1": 2, "2": 1 },
    orderValue: 300,
    status: "Pending"
  },
  {
    empId: ObjectId("6837284fc8f8ecee66fce74c"),
    items: { "3": 4 },
    orderValue: 480,
    status: "Completed"
  },
  {
    empId: ObjectId("6837284fc8f8ecee66fce74d"),
    items: { "1": 1, "2": 1, "4": 2 },
    orderValue: 550,
    status: "Pending"
  },
  {
    empId: ObjectId("6838694ef75ef1d8bcebe297"),
    items: { "2": 3 },
    orderValue: 270,
    status: "Cancelled"
  },
  {
    empId: ObjectId("68386d58f75ef1d8bcebe298"),
    items: { "3": 2, "5": 1 },
    orderValue: 340,
    status: "Completed"
  }
]);


db.orders.find();



db.orders.aggregate([
  {
    $lookup: {
      from: "employees",           
      localField: "empId",         
      foreignField: "_id",        
      as: "empOrderDetails"
    }
  },
  {
    $unwind: "$empOrderDetails"
  },
  {
    $project: {
      name: "$empOrderDetails.name",        
      email: "$empOrderDetails.email",      
      orderValue: 1,
      items: 1,
      status: 1
    }
  }
]);