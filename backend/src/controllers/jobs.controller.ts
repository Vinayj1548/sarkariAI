import { Request , Response } from "express";
import { jobs } from "../data/jobs";

export const filterJobs = async (
    req: Request,
    res: Response
) => {
    try{
        // console.log(req.body);
        console.log(jobs);

        return res.status(200).json({
            success:true,
            message: "filter api working",
            recievedData : req.body,
        });
    }catch(error){
        return res.status(500).json({
            success:false,
            message: "Internal Server Error"
        });
    }
};