const fs = require('fs');



module.exports = {

notification:(req,res)=>{

    let query = "SELECT * from `notification` where U_Id = '" + req.session.u_id + "' ORDER BY notification.Date DESC ";

    db.query(query, (err, result) => {

        
        if (err)
        {
            return res.status(500).send(err);
        }
        else
        {
            res.render('notification.ejs',{

                result : result
            });
           
        }
}); 


    
}
















}