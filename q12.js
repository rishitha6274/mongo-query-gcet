db.address.insertMany([
  {
    empId: ObjectId("68372843c8f8ecee66fce74b"),
    residence: {
      doorNum: "A-135",
      street: "Verdin Ct",
      city: "Columbus",
      state: "OH",
    },
  },
  {
    empId: ObjectId("6837284fc8f8ecee66fce74d"),
    residence: {
      doorNum: "AH-320",
      street: "Bay Meadows",
      city: "Jacksonville",
      state: "FL",
    },
  },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "address",
      localField: "_id",
      foreignField: "empId",
      as: "addr",
    },
  },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "address",
      localField: "_id",
      foreignField: "empId",
      as: "addr",
    },
  },
  { $match: { email: "chastity@gmail.com" } },
  { $unwind: "$addr" },
  { $project: { name: 1, "addr.residence.city": 1 } },
]);