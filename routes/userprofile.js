const fs = require('fs');

module.exports = {


    getUserProfile: (req, res) => {

        var query = "SELECT * FROM `user` where user.U_Id = '" + req.session.u_id + "'; SELECT * FROM `groups` where groups.G_Id IN (SELECT G_Id FROM `user_group` WHERE user_group.U_Id = '" + req.session.u_id + " ' ) ";

        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            } else {
                res.render('userprofile.ejs', {
                    userinfo: result[0],
                    groups: result[1]
                });

            }

        });

    },

   /*
    getGroup: (req, res) => {

        var query = "SELECT * FROM `groups` where groups.G_Id IN (SELECT g_id FROM 'user_group' WHERE user_group.u_id = '" + req.session.u_id + " ' )";

        db.query(query3, (err, result3) => {
            if (err) {
                return res.status(500).send(err);
            } else {
                res.render('userprofile.ejs', {
                    groups: result3
                });




            }





        });

    },*/

}