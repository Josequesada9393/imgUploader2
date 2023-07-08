import express from 'express';
import addRoutes from '../uploadRoutes/addRoutes'
require("dotenv").config();
import cors from 'cors'
const app = express();
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json({
    limit: '50mb'
  }));

app.get('/api', (req, res) => {
    res.send('This is a test web page!');
})

app.use('/api/addImage', addRoutes)


app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})
    