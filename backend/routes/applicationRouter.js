import express from "express";
import {
  employerGetAllApplication,
  jobseekerDeleteApplication,
  jobseekerGetAllApplication,
  postApplication,
} from "../controller/applicationController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isAuthenticated, postApplication);
router.get("/employer/getall", isAuthenticated, employerGetAllApplication);
router.get("/jobseeker/getall", isAuthenticated, jobseekerGetAllApplication);
router.delete("/delete/:id", isAuthenticated, jobseekerDeleteApplication);

export default router;