import express from 'express'
import {v4 as uuidV4} from 'uuid'
import { Category } from '../model/Category'


const categoriesRoutes = express.Router()

const categories: Category[] = []

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body

  const category = new Category()
  
  Object.assign(category, {
    name,
    description,
    created_at: new Date()
  })

  categories.push(category)

  return res.status(201).json([
    categories
  ])

} )

export default categoriesRoutes