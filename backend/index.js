//told CRUD requests meddlewares here ...
//server setting up here ....
//usefull pluggins here ...

//adding requirerings 
const express = require('express') ; 
const cors = require('cors') ; 
const app = express() ; 
const pool = require('./db') ;
/*----------------------------------------------------- */

app.use(express.json());
app.use(cors());

/*----------------------------------------------------- */
//publish a told 
app.post('told/' , async (req , res )=>{
    try {
        const {description} = req.body ; 
        const makeTold = await pool.query('INSERT INTO told(description) VALUES($1) RETURNING *') ; 
        res.json(makeTold.rows[0]) ; 
    } catch (error) {
        console.error(error.message);
    }
})

//get all told 
app.get('told/' , async (req ,res)=>{
    try {
        const allTold = await pool.query('SELECT * FROM told ;') ;
        res.json(allTold.rows)
    } catch (error) {
        console.error(error.message);
    }
})

//get a specific told 
app.get('told/:id' , async (req , res )=>{
    try {
        const {id} = req.params ; 
        const told = await pool.query('SELCT * FROM told WHERE told_id = $1' , [id]) ; 
        res.json(told.rows[0])
    } catch (error) {
        console.error(error.message);
    }
})


//edit a told 
app.put('told/:id' , async (req, res )=>{
    try {
        const {id} = req.params ; 
        const {description} = req.body ; 
        const editTold = await pool.query('UPDATE told SET description = $1 WHERE told_id = $2' , [id,description]) ;
        res.json(' told edited succesfully') ; 
    } catch (error) {
        console.error(error.message);
    }
})

//delete a told 
app.delete('told/:id' , async (req , res )=>{
    try {
        const {id} = req.body ;
        const dellTold = await pool.query('DELETE  FROM told WHERE told_id = $1' , [id]);
        res.json('told deleted successfully')
    } catch (error) {
        console.error(error.message);
    }
})

/*----------------------------------------------------------------- */
//setting up server 
const port = 5000 ; 
app.listen(port , ()=>{
    console.log('le serveur tourne sous le port '+ port +'!');
})