export const addGetCall = async (req: Request, res: Response,next:any) => {
    console.log(req);
    const endpoint=req.url;
    let responseFound={}
    fetch(endpoint).then((response)=>{
        response.json().then((data)=>{
            responseFound=data;
        })
    })
    console.log(endpoint,req.body,responseFound)
    return responseFound;
};
