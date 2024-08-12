import { Router } from "express"

//importar controllers
import {post, getPosts, getPostsByUser, getPostLikes, updatePost, deletePost} from '../controllers/postControllers.js'
//importar helpers

const router = Router()

//rotas

router.post('/create', post)
router.get('/all', getPosts)
router.get('/user/:user_id', getPostsByUser)
router.get('/likes/:post_id', getPostLikes)
router.put('/update/:post_id', updatePost)
router.delete('/delete/:post_id', deletePost)

export default router