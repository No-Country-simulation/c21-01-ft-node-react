import { pool } from '../middlewares/pool.js';

// createUser toma los datos del body y los inserta en la tabla usuario de la base de datos
// envía como respuesta un mensaje de éxito junto con la lista de usuarios o un mensaje de error junto con el mismo
export const createUser = async (req, res) => { 
    try{
        const data = req.body;
        if (!validarDatos(data.email)) return res.status(400).send('El mail ya está registrado');
        // **Chequar nombres de tabla, columnas y del objeto data** //
        const result = await pool.query('INSERT INTO usuario (Nombre, Email, Contrasena) VALUES ($1, $2, $3) RETURNING *', [data.nombre, data.email, data.contrasena]);
    
        res.status(201).json({res: result.rows, message: 'Usuario creado correctamente'});
    } catch(err) {
        console.error(err);
        res.status(500).json({ message: 'Error en el servidor', error: err });
    }
}

// validarDatos toma un email y chequea si ya existe en la base de datos
// devuelve true si no existe y false si ya está registrado
const validarDatos = async (email) => {
    try{
        const emailCheck = await pool.query('SELECT * FROM usuario WHERE email = $1', [email]);
            if (emailCheck.rows.length > 0) return false;
        return true;
    } catch(err) {
        console.error('Error validando el correo: ', err);
        return false;
    }
}