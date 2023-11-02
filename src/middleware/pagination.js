import badRequest from "../Err/badRequest.js";

async function paging( req,res, next){
  try{
    let {limit = 5, pages = 1,  ordering = "_id:-1"} =req.query;

    let [orderingCampe, order]= ordering.split(":");

    limit = parseInt(limit);
    pages = parseInt(pages);
    order = parseInt(order);

    const result = req.result;

    if (limit > 0 && pages> 0  ){
      const pagesResult = await result.find()
        .sort({[orderingCampe] :order})
        .skip((pages - 1 ) * limit)
        .limit(limit)
        .exec(); 

      res.status(200).json(pagesResult);
    }else{
      next(new badRequest);
    }
  }catch(err){
    next(err);
  }
}

export default paging;