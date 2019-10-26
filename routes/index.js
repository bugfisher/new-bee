const fs = require('fs');



module.exports = {
    

    

    getindex:(req,res) => {

        let query = "SELECT * FROM `category`; Select * from user where U_Id = '" + req.session.u_id + "' " ;

        req.session.currenturl = '/index';
        let name = req.session.u_id;


        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }

            var admin = false;

            if(req.session.admin == true)
            {
                admin = true;
            }

            if(req.session.loggedin)
            {
                res.render('index.ejs', {
                    categories: result[0],
                    user : result[1],
                    admin : admin,
                    name:name

                    
                });

            }
            else
            {
               console.log("Log in first");
            }
            
        });

        
    },
    
};

