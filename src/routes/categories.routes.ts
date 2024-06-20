import express from 'express'

const categoriesRoutes = express.Router()

const categories: any = []

categoriesRoutes.post("/categories", (req, res) => {
  const { name, description  } = req.body

  categories.push({
    name,
    description
  })

  return res.status(201).json([
    categories
  ])

} )

export default categoriesRoutes