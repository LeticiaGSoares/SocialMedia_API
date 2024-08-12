import conn from '../config/conn.js'

const tableName = "posts"

const tablePost = /*sql*/`
    CREATE TABLE IF NOT EXISTS ${tableName}(
        post_id varchar(60) primary key,
        user_id varchar(60) not null,
        description varchar(255) not null,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(user_id)
    )
`

conn.query(tablePost, (err)=> {
    if(err){
        console.error(err)
        return
    }

    console.log(`[${tableName}] table created`)
})