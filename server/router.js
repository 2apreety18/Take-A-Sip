const router = require('express').Router();
const orderController = require('./controllers/order');
const userController = require('./controllers/user');
const authMiddleware = require('./middlewares/auth');

router.get('/orders', orderController.getOrders);
router.post('/orders', orderController.postOrder);
router.put('/orders/:id/:status',orderController.updateOrderStatus);

router.post('/register', userController.create);
router.post('/login', userController.login);
router.get('/me', authMiddleware, userController.profile);
router.post('/logout', authMiddleware, userController.logout);

module.exports = router;