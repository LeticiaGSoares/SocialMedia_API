import conn from '../config/conn.js'

const tableName = "post_likes"

const tablePostLike = /*sql*/`
    CREATE TABLE IF NOT EXISTS ${tableName}(
        like_id varchar(60) primary key,
        user_id varchar(60) not null,
        post_id varchar(60) not null,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(user_id),
        FOREIGN KEY (post_id) REFERENCES posts(post_id)
    )
`

conn.query(tablePostLike, (err)=> {
    if(err){
        console.error(err)
        return
    }

    console.log(`[${tableName}] table created`)
})