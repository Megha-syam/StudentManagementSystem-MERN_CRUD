const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv=require('dotenv');

dotenv.config();
const studentRoutes=require('./routes/student.routes');

const app=express();

app.use(cors());
app.use(express.json());

app.use('/api',studentRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('✅ MongoDB Connected');
    // Start server after DB connection
    app.listen(process.env.PORT || 5000, () => {
        console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
    });
}).catch((err) => {
    console.error('❌ Error connecting to MongoDB:', err.message);
});