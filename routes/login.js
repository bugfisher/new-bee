var ssn;
module.exports = {



    getLogin: (req, res) => {


        if (req.session.currenturl === '/index') {
            req.session.loggedin = false;
            req.session.admin = false;
        }
        req.session.currenturl = "/";
        //cache.delete();
        res.render('login.ejs', {

        });

    },

    getLoginData: (req, res) => {

        let email = req.body.email;
        let password = req.body.password;

        req.session.admin = false;


        let query = "select * from `user` where Email = '" + email + "' AND Password = '" + password + "' ";




        db.query(query, (err, result) => {

            result.forEach((name, index) => {

                req.session.u_id = name.U_Id;

            });


            if (err) {
                return res.status(500).send(err);
            }


            if (result.length == 1) {
                if (email === 'vivekdarak1000@gmail.com') {
                    req.session.admin = true;
                }
                req.session.loggedin = true;
                console.log(req.session.u_id);
                res.redirect('/login_msg');

            } else {
                console.log("invaid login");
                res.render('invalid_login');
                req.session.loggedin = false;

            }
        });

    },

    login_msg: (req, res) => {


        res.render('login_msg.ejs');


    }






};