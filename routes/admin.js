const fs = require('fs');

module.exports = {



    admin: (req, res) => {


        var status = 0;
        let query = "SELECT * FROM `groups` where Status = '" + status + "' ";


        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }

            if (req.session.admin === true) {
                res.render('admin.ejs', {

                    result: result
                });
            }

        });






    },

    admin2: (req, res) => {


        var status = 1;
        let query = "SELECT * FROM `groups` where Status = '" + status + "' ";


        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }

            if (req.session.admin === true) {
                res.render('removegroup.ejs', {

                    result: result
                });
            }

        });

    },

    admin3: (req, res) => {


        let query = "SELECT * FROM `user` ";


        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }

            if (req.session.admin === true) {
                res.render('removeuser.ejs', {

                    result: result
                });
            }

        });

    },

    AcceptGroup: (req, res) => {


        let ID = req.params.G_Id;
        var status = 1;
        let query = "UPDATE `groups` SET Status = '" + status + "' WHERE G_Id = '" + ID + "' ";

        let query2 = "SELECT * from `groups` where G_ID = '" + ID + "' ";


        let u_id = db.query(query2, (err, result2) => {

            if (err) {
                return res.status(500).send(err);
            }

            result2.forEach((id, index) => {

                var text = "Congratulations!,Your Group Request has been accepted for Group Id-" + ID + ".";

                var date;
                date = new Date();
                date = date.getUTCFullYear() + '-' +
                    ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
                    ('00' + date.getUTCDate()).slice(-2) + ' ' +
                    ('00' + date.getHours()).slice(-2) + ':' +
                    ('00' + date.getMinutes()).slice(-2) + ':' +
                    ('00' + date.getSeconds()).slice(-2);

                console.log(date);


                let query1 = "INSERT INTO `notification` (`N_Id`, `Text`, `Date`, `U_Id`) VALUES ('NULL', '" + text + "', '" + date + "','" + id.GroupAdmin+"')";


                db.query(query1, (err, result1) => {

                    if (err) {
                        return res.status(500).send(err);
                    }
                });

            });
        });
        if (req.session.admin === true) {
            db.query(query, (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                } else {
                    res.redirect('/admin');

                }
            });
        }







    },

    DeclineGroup: (req, res) => {


        let ID = req.params.G_Id;
        let query = "DELETE  from `groups` WHERE G_Id = '" + ID + "' ";
        if (req.session.admin === true) {




            let query2 = "SELECT * from `groups` where G_ID = '" + ID + "' ";

            db.query(query2, (err, result2) => {

                if (err) {
                    return res.status(500).send(err);
                }

                result2.forEach((id, index) => {

                    var text = "Sorry!,Your Group Request cannot be accepted for Group Id-" + ID + ".";

                    var Date1 = "2019-09-12 17:33:31";

                    let query1 = "INSERT INTO `notification` (`N_Id`, `Text`, `Date`, `U_Id`) VALUES ('NULL', '" + text + "', '" + Date1 + "','" + id.GroupAdmin + "')";


                    db.query(query1, (err, result1) => {

                        if (err) {
                            return res.status(500).send(err);
                        }
                    });

                });
            });

            db.query(query, (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                } else {
                    res.redirect('/admin');

                }
            });


        }



    },

    RemoveGroup: (req, res) => {


        let ID = req.params.G_Id;
        let query = "DELETE  from `groups` WHERE G_Id = '" + ID + "' ";


        if (req.session.admin === true) {
            db.query(query, (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                } else {
                    res.redirect('/admin2');

                }
            });
        }
    },

    RemoveUser: (req, res) => {


        let ID = req.params.U_Id;
        let query = "DELETE  from `user` WHERE `U_Id` = '" + ID + "' ";


        if (req.session.admin === true) {
            db.query(query, (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                } else {
                    res.redirect('/admin3');

                }
            });
        }
    }



}