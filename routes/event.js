const fs = require('fs');


module.exports = {

    

    event:(req,res) => {

        var E_Id = req.params.E_Id;
        var U_Id = req.session.u_id;

        var ID = 14;

        let query = "SELECT * from `events` INNER JOIN groups ON events.G_Id = groups.G_Id AND events.E_Id = '" + E_Id + "'; SELECT * from `user_event` INNER JOIN user on user_event.U_Id = user.U_Id WHERE user_event.U_Id = '" + U_Id + "' AND user_event.E_Id = '" + E_Id + "';SELECT * from `user_event` INNER JOIN user on user_event.U_Id = user.U_Id AND user_event.E_Id = '" + E_Id + "'; SELECT count(*) as count from `user_event` where user_event.E_Id = '" + E_Id + "' " ;

        db.query(query,(err,result)=>{

            if (err) {
                console.log('error');
                return res.status(500).send(err);
            } else
            {
                var query1;
                result[0].forEach((iresult,index) => {

                     query1 = "SELECT *  FROM `user` WHERE U_Id = '" + iresult.GroupAdmin + "' ;SELECT *  FROM `groups` WHERE G_Id = '" + iresult.G_Id + "' ";

                     db.query(query1,(err,result1)=>{
    
                        if (err) {
                            console.log('error');
                            return res.status(500).send(err);
                        }

                        var joined = false;

                        if(result[1].length > 0)
                        {
                            joined = true;

                        }
                    
                    res.render('event.ejs',{
    
                        showevent:result[0],
                        user:result1[0],
                        group:result1[1],
                        joined:joined,
                        participants:result[2],
                        count:result[3]
                        
                    });
    
                });
                    
                });

                
                
        

            }



        

        });


    },

            
        


            




       
      
    

    







}