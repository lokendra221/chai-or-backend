import { v2 as cloudinary} from "cloudinary"
import fs from "fs"   // with node js use for file read write permission etc.

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME , 
    api_key: process.env.CLOUDINARY_API_KEY , 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});


const uploadOnCloudinary = async (localfilepath) => {
try{
    if(!localfilepath) return null
    //upload the file on the cloudinary
   const response = await cloudinary.uploader.uploadFile(localfilepath , {
        resource_type: 'auto'
    })
    //file upload successfully
    console.log("File uploaded successfully on cloudinary" , response.url);
    return response;
    //delete the local file
    
    
}
catch(error){
    fs.unlinkSync(localfilepath) // remove the locally saved tempory file as the upload operation got failed
    return null;
}
}

export {uploadOnCloudinary}