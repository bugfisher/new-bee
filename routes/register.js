const fs = require('fs');

module.exports = {
    

    getRegister:(req,res) => {

        
            res.render('register.ejs',{
                error :"False"
            });
       
    },

    getRegisterData:(req,res) => {

        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
        let contact = req.body.contact;
        let gender = req.body.gender;
        let Username = req.body.username;
        let uploadedFile = req.files.image;
        let image_name = uploadedFile.name;
        let fileExtension = uploadedFile.mimetype.split('/')[1];
        image_name = name + '.' + fileExtension;
        
        let query1 = "Select * from `user` where Username = '"+ Username + "' ";

        db.query(query1, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            else
            {
                if(result.length >= 1)
                {

                    res.render('register.ejs', {
                        error: "Error"
                    });

                }
                else
                {
                    let query = "INSERT INTO `user` (`U_Id`, `Name`, `Username`, `Email`, `Contact`, `Password`, `Gender`,`ProfilePic`) VALUES ('NULL', '" + name  + "', '" + Username + "', '" + email +"', '" + contact + "', '" + password + "', '" + gender + "', '" + image_name + "' )";

                    req.session.loggedin = true;

                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    else
                    {
                        if (uploadedFile.mimetype === 'image/png' || uploadedFile.mimetype === 'image/jpeg' || uploadedFile.mimetype === 'image/gif' || uploadedFile.mimetype === 'image/jpg')
                         {
                            // upload the file to the /public/assets/img directory
                            uploadedFile.mv(`public/assets/img/${image_name}`, (err ) => {
        
                                if (err) {
                                    return res.status(500).send(err);
                                }
                                else
                                {

                                    req.session.loggedin = true;
                                     res.redirect('/');  

                                }
                        });
        
                        
                    }
                        
                        

                    }
});         

                }
                

            }
});         



        


    }
    
};

