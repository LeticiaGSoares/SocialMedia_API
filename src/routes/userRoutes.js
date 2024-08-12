import { Router } from "express"
import { signup, login, getUserByID, getUsers, updateUser, deleteUser } from "../controllers/userControllers.js"

const router = Router()

router.post('/signup', signup)
router.post('/login', login)
router.get('/:user_id', getUserByID)
router.get('', getUsers)
router.put('/update/:user_id')
router.delete('/delete/:user_id')

export default router