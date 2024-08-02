const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db'); 


app.use(express.json());
app.use(cors());

/*----------------------------------------------------- */
// Publier un "told"
app.post('/told', async (req, res) => {
    try {
        const { description } = req.body; 
        const { created_at } = req.body;
        const { title } = req.body;
        const { likes } = req.body;
        const makeTold = await pool.query('INSERT INTO told(description,created_at,title,likes) VALUES($1,$2,$3,$4) RETURNING *', [description,created_at,title,likes]); 
        res.json(makeTold.rows[0]); 
        console.log('succesfully posted !');
    } catch (error) {
        console.error(error.message);
    }
});

// Obtenir tous les "told"
app.get('/told', async (req, res) => {
    try {
        const allTold = await pool.query('SELECT * FROM told ORDER BY told_id DESC'); 
        res.json(allTold.rows);
        
        console.log(allTold.rows);
    } catch (error) {
        console.error(error.message);
    }
});

// Obtenir un "told" spécifique
app.get('/told/:id', async (req, res) => {
    try {
        const { id } = req.params; 
        const told = await pool.query('SELECT * FROM told WHERE told_id = $1', [id]); 
        res.json(told.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});


//Modifier un told 
app.put('/told/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { description, title } = req.body;  // Récupérer description et title en une seule ligne
        
        await pool.query(
            'UPDATE told SET description = $1, title = $2 WHERE told_id = $3',
            [description, title, id]
        );
        
        res.json('Told edited successfully'); 
    } catch (error) {
        console.error(error.message);
        res.status(500).json('Error updating told');
    }
});


// Supprimer un "told"
app.delete('/told/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM told WHERE told_id = $1', [id]);
        res.json('Told deleted successfully');
        console.log('succesfully deleted !');
    } catch (error) {
        console.error(error.message);
    }
}); 

//Update les likes 
app.put('/update_likes/:id' , async (req , res )=>{
    try {
        const {id} = req.params ; 
        const {likes} = req.body ;

        const newLikes = await pool.query('UPDATE told SET likes = $1 WHERE told_id =$2 RETURNING *' , [likes,id]) ;
        res.json(newLikes.rows[0]) ;
        console.log('successfully updated !');
    } catch (error) {
        console.error(error.message);
    }
})



/*----------------------------------------------------------------- */
// Configuration du serveur 
const port = 5000; 
app.listen(port, () => {
    console.log('Le serveur tourne sous le port ' + port + '!');
});
