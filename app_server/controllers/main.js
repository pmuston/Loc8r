/**
 * Created by paulmuston on 17/04/2014.
 */

/* GET 'about us' page */
module.exports.about = function(req, res){
    res.render('generic-text', { title: 'About' });
};
/* GET 'sign in' page */
module.exports.signin = function(req, res){
    res.render('signin-index', { title: 'Sign in to Loc8r' });
};