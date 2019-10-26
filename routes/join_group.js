const fs = require('fs');


module.exports = {

    join_group:(req,res) => {


        let ID = req.params.G_Id;
        let query = "INSERT INTO `user_group` (`U_Id`, `G_Id`) VALUES ('" + req.session.u_id + "','" + ID + "'); SELECT * from groups where G_Id = '" + ID + "' ";

        db.query(query,(err,result)=>{

            if (err) {
                return res.status(500).send(err);
            }
            var u_total;
            result[1].forEach((result, index) => {

                var total = result.TotalMembers + 1;
            let query1 = "UPDATE groups SET TotalMembers = '" + total + "'  WHERE G_Id = '" + result.G_Id + "' ";

            db.query(query1,(err,result1) => {
 
                if (err) {
                    return res.status(500).send(err);
                }
                else
                {
                     res.redirect('/CategoryDisplay/' + result.CategoryId );
                }



                });
            });



            
        });
        


            




       
      
    },



}