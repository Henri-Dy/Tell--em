const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db'); // Assurez-vous que le chemin vers db.js est correct

app.use(express.json());
app.use(cors());

/*----------------------------------------------------- */
// Publier un "told"
app.post('/told', async (req, res) => {
    try {
        const { description } = req.body; 
        const makeTold = await pool.query('INSERT INTO told(description) VALUES($1) RETURNING *', [description]); 
        res.json(makeTold.rows[0]); 
    } catch (error) {
        console.error(error.message);
    }
});

// Obtenir tous les "told"
app.get('/told', async (req, res) => {
    try {
        const allTold = await pool.query('SELECT * FROM told'); 
        res.json(allTold.rows);
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

// Modifier un "told"
app.put('/told/:id', async (req, res) => {
    try {
        const { id } = req.params; 
        const { description } = req.body; 
        await pool.query('UPDATE told SET description = $1 WHERE told_id = $2', [description, id]);
        res.json('Told edited successfully'); 
    } catch (error) {
        console.error(error.message);
    }
});

// Supprimer un "told"
app.delete('/told/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM told WHERE told_id = $1', [id]);
        res.json('Told deleted successfully');
    } catch (error) {
        console.error(error.message);
    }
});

/*----------------------------------------------------------------- */
// Configuration du serveur 
const port = 5000; 
app.listen(port, () => {
    console.log('Le serveur tourne sous le port ' + port + '!');
});
