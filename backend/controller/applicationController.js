
/* import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Application } from "../models/applicationSchema.js";
import { Job } from "../models/jobSchema.js";

// admin can get all the applicant who will apply jobs id
export const employerGetAllApplication = catchAsyncError(async (req, res, next) => {
    const { role } = req.user; // store user all  data 
    if (role === "Job Seeker") {
        return next(new ErrorHandler("Job Seeker is not allowed to access this resources!", 400));
    }
    const { _id } = req.user;
    const application = await Application.find({ 'employerID.user': _id }); // match employer id = application job id
    res.status(200).json({
        success: true,
        application,
    });
});

// Job Seeker(user) get all job applications where he apply --> user who will apply for those jobs
export const jobseekerGetAllApplication = catchAsyncError(async (req, res, next) => {
    const { role } = req.user; // store user all  data 
    if (role === "Employer") {
        return next(new ErrorHandler("Employer is not allowed to access this resources!", 400));
    }
    const { _id } = req.user;
    const application = await Application.find({ 'applicantID.user': _id }); // match employer id = application job id
    res.status(200).json({
        success: true,
        application,
    });
});

//  user can delete tha application where he apply this jobs
export const jobseekerDeleteApplication = catchAsyncError(async (req, res, next) => {
    const { role } = req.user; // store user all  data 
    if (role === "Employer") {
        return next(new ErrorHandler("Employer is not allowed to access this resources!", 400));
    }
    const { id } = req.params;
    const application = await Application.findById(id);
    if (!application) {
        return next(new ErrorHandler("OOps , application not found!", 400));
    }
    await application.deleteOne();
    res.status(200).json({
        success: true,
        message: "Application deleted successfully!",
    });
});

//  post a job application -->
export const postApplication = catchAsyncError(async (req, res, next) => {
    const { role } = req.user;
    if (role === "Employer") {
        return next(new ErrorHandler("Employer is not allowed to access this resource!", 400));
    }

    // Get all application details
    const { name, email, coverLetter, phone, address, jobId } = req.body;
    
    const applicantID = {
        user: req.user._id,
        role: "Job Seeker"
    };

    if (!jobId) {
        return next(new ErrorHandler("Job ID is required", 400));
    }

    const jobDetails = await Job.findById(jobId);
    if (!jobDetails) {
        return next(new ErrorHandler("Job not found", 404));
    }

    const employerID = {
        user: jobDetails.postedBy,
        role: "Employer"
    };

    // Validate all required fields
    if (!name || !email || !coverLetter || !phone || !address) {
        return next(new ErrorHandler("Please fill all the fields", 400));
    }

    // Create application
    const application = await Application.create({
        name,
        email,
        coverLetter,
        phone,
        address,
        applicantID,
        employerID
    });

    res.status(201).json({
        success: true,
        message: "Application Submitted Successfully",
        application
    });
}); */


import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Application } from "../models/applicationSchema.js";
import { Job } from "../models/jobSchema.js";

// Employer gets all applications for their jobs
export const employerGetAllApplication = catchAsyncError(async (req, res, next) => {
    const { role } = req.user;
    if (role === "Job Seeker") {
        return next(new ErrorHandler("Job Seeker is not allowed to access this resource!", 400));
    }
    const { _id } = req.user;
    const applications = await Application.find({ 'employerID.user': _id });
    res.status(200).json({
        success: true,
        applications,
    });
});

// Job Seeker gets all their applications
export const jobseekerGetAllApplication = catchAsyncError(async (req, res, next) => {
    const { role } = req.user;
    if (role === "Employer") {
        return next(new ErrorHandler("Employer is not allowed to access this resource!", 400));
    }
    const { _id } = req.user;
    const applications = await Application.find({ 'applicantID.user': _id });
    res.status(200).json({
        success: true,
        applications,
    });
});

// Job Seeker deletes their application
export const jobseekerDeleteApplication = catchAsyncError(async (req, res, next) => {
    const { role } = req.user;
    if (role === "Employer") {
        return next(new ErrorHandler("Employer is not allowed to access this resource!", 400));
    }
    const { id } = req.params;
    const application = await Application.findById(id);
    if (!application) {
        return next(new ErrorHandler("Application not found!", 404));
    }
    await application.deleteOne();
    res.status(200).json({
        success: true,
        message: "Application deleted successfully!",
    });
});

// Submit new job application
export const postApplication = catchAsyncError(async (req, res, next) => {
    const { role } = req.user;
    if (role === "Employer") {
        return next(new ErrorHandler("Employer is not allowed to access this resource!", 400));
    }

    // Destructure and validate all required fields
    const { name, email, coverLetter, phone, address, jobId } = req.body;
    
    if (!jobId) {
        return next(new ErrorHandler("Job ID is required", 400));
    }
  console.log(jobId);
  
    // Validate job exists
    const jobDetails = await Job.findById(jobId);
    if (!jobDetails) {
        return next(new ErrorHandler("Job not found", 404));
    }

    // Validate all required application fields
    const requiredFields = { name, email, coverLetter, phone, address };
    for (const [field, value] of Object.entries(requiredFields)) {
        if (!value) {
            return next(new ErrorHandler(`Please provide ${field}`, 400));
        }
    }

    // Create application
    const application = await Application.create({
        name,
        email,
        coverLetter,
        phone,
        address,
        applicantID: {
            user: req.user._id,
            role: "Job Seeker"
        },
        employerID: {
            user: jobDetails.postedBy,
            role: "Employer"
        }
    });

    res.status(201).json({
        success: true,
        message: "Application submitted successfully!",
        application
    });
});