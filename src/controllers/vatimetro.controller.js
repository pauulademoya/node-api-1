import { pool } from '../db.js'

export const ReadVatimetro = async (req, res) => {
    try {
        
        const [result] = await pool.query(`
            SELECT 
              (SELECT Potencia_total FROM vatimetro WHERE Vat_ID = "c" ORDER BY Fecha DESC LIMIT 1) AS Generada,
              (SELECT Potencia_total FROM vatimetro WHERE Vat_ID = "g" ORDER BY Fecha DESC LIMIT 1) AS Consumida
        `);
        
      
        res.json(result)

    } catch (error) {
       
        return res.status(500).json({
            message: 'Error de DB',
            error: error.message 
        })
    }
}
