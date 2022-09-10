db.produtos.update(
  { nome: { $ne: "McChicken" } },
  { $addToSet: { ingredientes: "ketchup" } },
  { multi: true },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);
