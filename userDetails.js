const express = require('express');
const router = express.Router();
const UserDetail = require('userDetail');

//Getting all
router.get('/', async (req, res) => {
    try {
        const userDetails = await UserDetail.find();
        res.json(userDetails);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Getting one
router.get('/:id', getUserDetail, (req, res) => {
        // res.send(res.subscriber.name); // this only display name
        res.json(res.userDetail);
     
});

//Creating one
router.post('/', async (req, res) => {
    const userDetails = new UserDetail({
        name: req.body.name,
        ic_number: req.body.ic_number,
        email: req.body.email,
        mobile: req.body.mobile
    });
    try {
        const newUserDetail = await userDetails.save();
        res.status(201).json(newUserDetail);
    } catch (err){
        res.status(400).json ({ message: err.message });
    }
});

//update one
router.patch('/:id', getUserDetail, async (req, res) => {
    if (req.body.name != null) {
        res.userDetail.name = req.body.name
    }    
    if (req.body.ic_number != null) {
        res.userDetail.ic_number = req.body.ic_number
    }
    if (req.body.email != null) {
        res.userDetail.email = req.body.email
    }
    if (req.body.mobile != null) {
        res.userDetail.mobile = req.body.mobile
    }
    try {
        const updatedUserDetail = await res.userDetail.save();
        res.json(updatedUserDetail);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Deleting one
router.delete('/:id', getUserDetail, async (req, res) => {
    try{
        await res.userDetail.remove();
        res.json({ message: "User Deleted" })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

});

async function getUserDetail(req, res, next) {
    let userDetail
    try {
        userDetail = await UserDetail.findById(req.params.id);
        if (userDetail == null) {
            return res.status(404).json({ message: 'Cannot find userDetail'});
        }
    } catch (err) {
        return res.status(500).json ({ message: err.message })
    }
    res.userDetail = userDetail
    next()
}



module.exports = router;