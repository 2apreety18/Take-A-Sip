const Order = require("../models/order");

async function getOrders(req, res) {
  try {
    console.log(req.user);
    if (req.user && req.user.usertype === 'admin') {
      const orders = await Order.find({});
      console.log(orders);

      const clientOrders = orders.filter(order => order.orderfor === 'CLIENT');
      const selfOrders = orders.filter(order => order.orderfor === 'SELF');

      console.log([...clientOrders, ...selfOrders]);

      res.status(200);
      res.send([...clientOrders, ...selfOrders]);
    } else {
      res.status(403).send('You are not authorized.')
    }
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}

// async function getOrders(req, res) {
//   try {
//       const orders = await Order.find({});
//       res.status(200);
//       res.send(orders);
//   } catch (error) {
//     res.status(500);
//     console.log(error);
//   }
// }

async function postOrder(req, res) {
  try {
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
    if (req.user && req.user.usertype === 'admin') {
      const { id, status } = req.params;
      const result = await Order.findByIdAndUpdate(id, {$set: {status: status}});
      res.status(200);
      res.send(result);
    } else {
      res.status(403).send('You are not authorized.')
    }
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}

async function deleteOrder(req, res) {
  try {
    const { id } = req.params
    const result = await Order.findByIdAndDelete(id);
    res.status(200);
    res.send(result);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}

module.exports = { getOrders, postOrder, updateOrderStatus, deleteOrder }