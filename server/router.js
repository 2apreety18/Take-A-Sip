const router = require('express').Router();
const orderController = require('./controllers/order');
const userController = require('./controllers/user');
const authMiddleware = require('./middlewares/auth');

router.get('/orders' , authMiddleware, orderController.getOrders);
router.post('/orders', orderController.postOrder);
router.put('/orders/:id/:status',orderController.updateOrderStatus);

router.post('/register', userController.register);
router.post('/register/admin', userController.registerAdmin);
router.post('/login', userController.login);

module.exports = router;