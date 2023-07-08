import { handleUpload } from "../utils/cloudinaryConfig";
import {Request, Response} from 'express'

export const UpImage = async (req:any, res:Response) => {
    try {
      const b64 = Buffer.from(req.file.buffer).toString("base64");
      let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      const cldRes = await handleUpload(dataURI);
      res.json(cldRes.url);
    } catch (error:any) {
      console.log(error);
      res.json({
        message: error.message,
      });
    }
  }