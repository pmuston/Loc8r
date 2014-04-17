/**
 * Created by paulmuston on 17/04/2014.
 */

/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'Express' });
};