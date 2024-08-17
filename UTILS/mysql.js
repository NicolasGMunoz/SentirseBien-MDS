import {pool} from '../DB/connectionDB.js'

const consulta = async () =>{
    try {
        const result = await pool.query("SELECT * FROM usuarios")
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}


consulta();