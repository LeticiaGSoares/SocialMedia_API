import conn from '../config/conn.js'

const tableName = "users"

const tableUsers = /*sql*/`
    CREATE TABLE IF NOT EXISTS ${tableName}(
        user_id varchar(60) primary key,
        username varchar(20) not null,
        name varchar(255) not null,
        email varchar(255) not null,
        telephone varchar(15) not null,
        password varchar(16) not null,
        profile_image varchar(255) not null,
        bio varchar(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
`

conn.query(tableUsers, (err)=> {
    if(err){
        console.error(err)
        return
    }

    console.log(`[${tableName}] table created`)
})