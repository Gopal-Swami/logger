const errorMiddleware=(err,req,res,next)=>{
    const statusCode=res.statusCode===200 ? 500: res.statusCode;
    res.status(statusCode);
    res.json({
        message:'Something Went Wrong'
    })
}

module.exports=errorMiddleware