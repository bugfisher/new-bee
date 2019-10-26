const fs = require('fs');


module.exports = {
    

    

    addgroup:(req,res) => {

        res.render('addgroup.ejs', {
               
        });
        
    },

    addgroup_post:(req,res) =>{

        let cat_id = req.params.Cat_Id;
        let name = req.body.name;
        var U_Id = req.session.u_id;
        let description = req.body.description;
        let uploadedFile = req.files.image;
        let image_name = uploadedFile.name;
        let fileExtension = uploadedFile.mimetype.split('/')[1];
        image_name = name + '.' + fileExtension;

        let query ="INSERT INTO `groups` (`G_Id`, `GroupName`, `GroupAdmin`, `GroupDescription`, `CategoryId`, `TotalMembers`,`Status`,`G_Image`) VALUES ('NULL', '" + name  + "', '" + req.session.u_id + "', '" + description +"', '" + cat_id + "', '" + 1 + "',  '" + 0 + "', '" + image_name + "' );SELECT LAST_INSERT_ID() as last_id";



        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            else
            {
                if (uploadedFile.mimetype === 'image/png' || uploadedFile.mimetype === 'image/jpeg' || uploadedFile.mimetype === 'image/gif' || uploadedFile.mimetype === 'image/jpg') {
                    // upload the file to the /public/assets/img directory
                    uploadedFile.mv(`public/assets/img/${image_name}`, (err ) => {

                        if (err) {
                            return res.status(500).send(err);
                        }
                });

                result[1].forEach(element => {
                    
                

                var query1 = "INSERT INTO `user_group` (`U_Id`,`G_Id`) VALUES ('" + U_Id + "' , '" + element.last_id + "')";

                db.query(query1, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    else
                    {
                        res.redirect('/index');  
                    }
                });

            });

                    





                
            }
            else
            {
                console.log("Invaild file type");
                res.redirect('/');  
            }
                
               
                

            }
});         

    }
};