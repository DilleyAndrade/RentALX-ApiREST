import express from 'express'

import {v4 as uuidV4} from 'uuid'

const categoriesRoutes = express.Router()

const categories: any = []

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body

  const category = {
    name,
    description,
    id: uuidV4()
  }

  categories.push(category)

  return res.status(201).json([
    categories
  ])

} )

export default categoriesRoutes