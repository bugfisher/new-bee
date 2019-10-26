const fs = require('fs');


module.exports = {
    
    create_event:(req,res) => {

        res.render('create_event.ejs', {
               
        });
        
    },

    create_post_event:(req,res) =>{

        let G_Id = req.params.G_Id;
        var U_Id = req.session.u_id;
        let name = req.body.name;
        let description = req.body.description;
        let uploadedFile = req.files.image;
        let image_name = uploadedFile.name;
        let Capacity = req.body.Capacity;
        let Address = req.body.Address;
        let datetime = req.body.datetime;
        let fileExtension = uploadedFile.mimetype.split('/')[1];
        image_name = name +  '.' + fileExtension;


        var date;
        date = new Date(datetime);
        date = date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ' + 
            ('00' + date.getHours()).slice(-2) + ':' + 
            ('00' + date.getMinutes()).slice(-2) + ':' + 
            ('00' + date.getSeconds()).slice(-2);

        

        let query ="INSERT INTO `events` (`E_Id`,`G_Id`, `EventName`, `EventDescription`,`DateTime`,`Address`,`EventImage`,`Available`) VALUES ('NULL','" + G_Id + "', '" + name  + "', '" + description +"', '" + date + "', '" + Address + "', '" + image_name + "','" + Capacity + "' );SELECT LAST_INSERT_ID() as last_id";



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
                    
                

                var query1 = "INSERT INTO `user_event` (`U_Id`,`E_Id`) VALUES ('" + U_Id + "' , '" + element.last_id + "')";

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