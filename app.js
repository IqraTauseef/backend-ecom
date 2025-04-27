const express = require ('express');
const app = express();
const cors = require('cors');
const connectDB = require('./src/config/db')
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const authRouter = require('./src/routes/authRoutes');
const adminProductsRouter = require('./src/routes/products-routes');

const shopProductsRouter = require("./src/routes/shopRoutes/products-routes");
const shopCartRouter = require("./src/routes/shopRoutes/cart-routes");
const shopAddressRouter = require("./src/routes/shopRoutes/address-routes");
const shopOrderRouter = require("./src/routes/shopRoutes/order-routes");
const shopSearchRouter = require("./src/routes/shopRoutes/search-routes");
const shopReviewRouter = require("./src/routes/shopRoutes/review-routes");

const commonFeatureRouter = require("./src/routes/feature-routes");
dotenv.config();
connectDB();




app.use(
    cors({
        origin: ' http://localhost:5173',
        credentials: true,
        methods:['GET','POST','PUT','DELETE'],
        allowedHeaders:[
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
    })
);


app.use(cookieParser())
app.use(express.json());

// Aut-Routes
app.use('/api/auth', authRouter);

// Admin-Products-Routes
app.use('/api/admin/products', adminProductsRouter);


// Shop-Products-Routes
app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);

app.use("/api/common/feature", commonFeatureRouter);

module.exports = app;