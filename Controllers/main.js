module.exports.Start=(req,res)=>{


    res.status(200).json({

            message: 'Loading is accept!'


    })

}
module.exports.Redirect=(req,res)=>{
res.redirect('start');
console.log('true');

}