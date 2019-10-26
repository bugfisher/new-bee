const fs = require('fs');

module.exports = {


    addeventuser:(req,res) =>{


         var E_Id = req.params.E_Id;
         var U_Id = req.session.u_id;

         let query = "INSERT INTO `user_event`(U_Id,E_Id) VALUES ('" + U_Id + "','" + E_Id + "' );"

         db.query(query, (err, result) => {

            if (err) {
                return res.status(500).send(err);
            }
            else
            {

                res.redirect('/event/' + E_Id);

            }






         });









    },

    removeeventuser:(req,res) =>{

        var E_Id = req.params.E_Id;
        var U_Id = req.session.u_id;

        let query = "DELETE FROM `user_event` WHERE user_event.E_Id = '" + E_Id + "' AND user_event.U_Id = '" + U_Id + "'  ";

        db.query(query, (err, result) => {

            if (err) {
                return res.status(500).send(err);
            }
            else
            {

                res.redirect('/event/' + E_Id);

            }

        });



    },











};