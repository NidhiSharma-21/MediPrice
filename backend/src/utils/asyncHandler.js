
const asyncHandler = (requestHandler) =>{
    return (req, res, next) => {
        console.log("Req inside async handler : ", req.body)
        Promise.resolve(
            requestHandler(req, res, next)
        ).catch((err) => next(err));
    }
}

export {asyncHandler}