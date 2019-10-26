const fs = require('fs');

module.exports = {
    

    getCategory:(req,res) => {

        var ID = req.params.Cat_Id;
        

        var query =  "SELECT * FROM `groups` where groups.CategoryId = '" + ID + "' AND G_Id NOT IN (SELECT G_Id FROM user_group WHERE U_Id = '" + req.session.u_id + "')AND Status = 1 ; SELECT * FROM `category` where category.Cat_Id = '" + ID + "';SELECT DISTINCT * from user u1,user_group u2 where u1.U_Id = u2.U_ID ;select * from user   " ;
        let query2 = "SELECT * FROM `category` where category.Cat_Id != '" + ID +"' " ;



        var output1;
        db.query(query2, (err, result1) => {

            if (err) {
                return res.status(500).send(err);
            }

           output1 = result1;

        });

 

        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            else
            {
                                res.render('category/category.ejs',{
                                groups: result[0],
                                categories: result[1],
                                members:result[2],
                                id:ID,
                                users:result[3],
                                categories1 : output1
                            });

                        
                       

                    }

               
                    
            
            
        });

    

        
            
       
    },
}