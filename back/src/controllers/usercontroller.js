import { pool } from '../middlewares/pool.js';

export const createUser = async (req, res) => { 
    try{
        const data = req.body;
        if (!validarDatos(data.email)) return res.status(400).send('El mail ya está registrado');
        // Chequar nombres de tabla, columnas y del objeto data
        const result = await pool.query('INSERT INTO usuario (Nombre, Email, Contrasena) VALUES ($1, $2, $3) RETURNING *', [data.nombre, data.email, data.contrasena]);
    
        res.status(201).json({res: result.rows, message: 'Usuario creado correctamente'});
    } catch(err) {
        console.error(err);
        res.status(500).json({ message: 'Error en el servidor', error: err });
    }
}

const validarDatos = async (email) => {
    try{
        const emailCheck = await pool.query('SELECT * FROM usuario WHERE email = $1', [email]);
            if (emailCheck.rows.length > 0) return false;
        return true;
    } catch(err) {
        console.error('Error validando el correo: ', error);
        return false;
    }
}