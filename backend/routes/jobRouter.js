import express from 'express';
import { deleteJob, getAllJobs, getMyJobPost, getSingleJob, postJob, updatePostJob } from '../controller/jobController.js';
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/getall" , getAllJobs);
router.post("/post" , isAuthenticated , postJob);
router.get("/getmyjobs" , isAuthenticated , getMyJobPost);
router.put("/updatejobs/:id" , isAuthenticated , updatePostJob);
router.delete("/delete/:id" , isAuthenticated , deleteJob);
router.get("/:id" , isAuthenticated , getSingleJob);


export default router;