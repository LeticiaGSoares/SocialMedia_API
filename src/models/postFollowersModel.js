import conn from '../config/conn.js'

const tableName = "user_followers"

const tableUserFollowers = /*sql*/`
    CREATE TABLE IF NOT EXISTS ${tableName}(
        follow_id varchar(60) primary key,
        followed_id varchar(60) not null,
        follower_id varchar(60) not null,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (followed_id) REFERENCES users(user_id),
        FOREIGN KEY (follower_id) REFERENCES posts(user_id)
    )
`

conn.query(tableUserFollowers, (err)=> {
    if(err){
        console.error(err)
        return
    }

    console.log(`[${tableName}] table created`)
})