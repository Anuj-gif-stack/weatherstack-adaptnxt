const sendUrlNotFound = (req, res)=>{
    res.status(404).json({message: 'URL Not Found'})
}

module.exports = {
    sendUrlNotFound
}