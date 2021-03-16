import * as express from 'express';
import * as chirpsStore from '../utilities/chirpstore';

const router = express.Router();

// GET http://localhost:3000/api/chirps/123
router.get('/:id', (req, res) =>  {
    // get one chirp by id
    const id = req.params.id;
    const chirp = chirpsStore.GetChirp(id);
    res.json(chirp);  
});

// GET http://localhost:3000/api/chirps/
// router.get('/', (req, res) =>  {
//     // get all chirps
//     const chirps = chirpsStore.GetChirps();
//     res.json(chirps);        
// });

router.get('/', (req, res) => {
    const data = chirpsStore.GetChirps()
    const chirps = Object.keys(data).map(key => {
        return {
            id: key,
            name: data[key].name,
            message: data[key].message
        }
    })
    chirps.pop()
    res.json(chirps)
})

// POST http://localhost:3000/api/chirps/
// { user: string, message: string}
router.post('/add', (req, res) => {
    // create a new chirp
    const newChirp = req.body;
    //console.log(newChirp)
    chirpsStore.CreateChirp(newChirp);
    res.json({ msg: 'new chirp added'});    
});

// PUT http://localhost:3000/api/chirps/123
// { user: string, message: string}
router.put('/:id', (req, res) => {
    // edit a chirp
    const id = req.params.id;
    const editedChirp = req.body;
    chirpsStore.UpdateChirp(id, editedChirp);
    res.json({ msg: `chirp id ${id} edited`, test: editedChirp});     
});

// DELETE http://localhost:3000/api/chirps/123
router.delete('/:id', (req, res) => {
    // delete a chirp
    const id = req.params.id;
    chirpsStore.DeleteChirp(id);
    res.json({ msg: `chirp id ${id} deleted`});    
})

export default router;
