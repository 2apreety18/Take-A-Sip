const Order = require("../models/order");

async function getOrders(req, res) {
  try {
    const orders = await Order.find({});
    console.log("from angular",orders)
    res.status(200);
    res.send(orders);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


async function postOrder(req, res) {
  try {
   // const { id, user, foods } = req.body;
   // const result = await Order.create({ id, user, foods });
    const order = await Order.create(req.body);
    res.status(201);
    res.send(order);

  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


async function updateOrderStatus(req, res) {
  try {
    const { id, status } = req.params;
    const result = await Order.findByIdAndUpdate(id, {$set: {status: status}});
    res.status(200);
    res.send(result);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}

module.exports = { getOrders, postOrder, updateOrderStatus }