//1
db.employees.aggregate([
  {
    $sort: { salary: -1 } 
  },
  {
    $limit: 3 
  }
]);

//2
db.employees.aggregate([
  {
    $project: {
      name: 1,
      annualSalary: { $multiply: ["$salary", 12] }
    }
  }
]);

//3
db.employees.aggregate([
  {
    $project: {
      name: 1,
      age: 1,
      band: {
        $cond: {
          if: { $gt: ["$age", 40] },
          then: "Band A",
          else: "Band B"
        }
      }
    }
  }
]);