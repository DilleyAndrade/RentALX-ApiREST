import { Router } from "express";

import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";

const specificationsRouter = Router()

const specificationsRepository = new SpecificationsRepository()

specificationsRouter.post("/", (req, res) => {
  const { name, description } = req.body
  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  )
  createSpecificationService.execute({ name, description })
  return res.status(201).send()
})

export {specificationsRouter}