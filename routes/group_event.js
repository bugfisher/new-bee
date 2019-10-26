const fs = require('fs');


module.exports = {

    group_event:(req,res) => {


        let ID = req.params.G_Id;

        let query = "SELECT * from `groups` where G_Id = '" + ID + "' ; SELECT * from `events` where events.G_Id = '" + ID + "' ; SELECT * FROM forum INNER JOIN user ON forum.U_Id = user.U_Id AND forum.G_Id = '" + ID + "' ORDER BY forum.DateTime ;";

        db.query(query,(err,result)=>{

            if (err) {
                return res.status(500).send(err);
            } else
            {
                result[0].forEach((group, index) => {

                    if(group.GroupAdmin == req.session.u_id){
                            res.render('group_events.ejs',{

                                groups:result[0],
                                events:result[1],
                                forums_users:result[2],
                                group_admin:true,
                                G_Id:ID
                                
                            });
                    }
                    else{
                        res.render('group_events.ejs',{

                            groups:result[0],
                            events:result[1],
                            forums_users:result[2],
                            group_admin:false,
                            G_Id:ID
                            
                        });
                    }

                        
                    });
                }

            });

    },

            
        


            




       
      
    

    group_event_post:(req,res) => {

        var ID = req.params.G_Id;
        var text = req.body.post;
        var FID=req.body.FId;
        var reply = req.body.reply;
        console.log(FID);

        var date;
            date = new Date();
            date = date.getUTCFullYear() + '-' +
                ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
                ('00' + date.getUTCDate()).slice(-2) + ' ' + 
                ('00' + date.getHours()).slice(-2) + ':' + 
                ('00' + date.getMinutes()).slice(-2) + ':' + 
                ('00' + date.getSeconds()).slice(-2);

                if(typeof FID !== "undefined")
                {
                    console.log('hello');
                    var query = "INSERT INTO `forum` (`F_Id`, `U_Id`, `G_Id`, `DateTime`, `Text`,`post_id`) VALUES ('NULL', '" + req.session.u_id  + "', '" + ID + "', '" + date +"', '" + reply + "', '" + FID + "' )";

                }
                else
                {
                    var query = "INSERT INTO `forum` (`F_Id`, `U_Id`, `G_Id`, `DateTime`, `Text`,`post_id`) VALUES ('NULL', '" + req.session.u_id  + "', '" + ID + "', '" + date +"', '" + text + "', 'NULL')";

                }

        
        

        db.query(query,(err,result)=>{

            if (err) {
                return res.status(500).send(err);
            } else
            {
                            res.redirect('/group_event/'+ID);

                        }
                });





    },


    

    







}