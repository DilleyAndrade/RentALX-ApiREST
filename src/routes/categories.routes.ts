import express from 'express'
import { CategoriesRepository } from '../repositories/categoriesRepository'


const categoriesRoutes = express.Router()

const categoriesRepository = new CategoriesRepository()


categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body

  categoriesRepository.create({name, description})

  return res.status(201).send()

} )

export default categoriesRoutes