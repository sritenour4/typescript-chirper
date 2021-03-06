import * as express from 'express';
import chirpRouter from './routes/chirps'
import * as path from 'path'

const app = express();
// parse JSON so I can use in chirps.js
app.use(express.json())

app.use(express.static('public'));
app.use('/chirps', chirpRouter);

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')))

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
