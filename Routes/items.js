const express = require('express');
const passport = require('passport');
const router = express.Router();
const Item = require('../models/Item');

router.get('/', passport.authenticate('oauth-bearer', {session: false}), async (req, res) => {
    try{
        res.status(200).send({message: `Welcome ${req.authInfo.name} to AAD-Protected ToDo Api.`});
    }catch(err){
        res.status(400).json({message: err});
    }
});

/** @desc   Get all items 
 *  @route  GET /items/getItem
*/
router.get('/getItems', passport.authenticate('oauth-bearer', {session: false}), async (req, res) => {
    try{
        const items = await Item.find();
        res.status(200).json(items); 
    } catch(err){
        res.status(400).json({message: err});
    }
});

/** @desc   Add item
 *  @route  POST /items/addItem
*/
router.post('/addItem', passport.authenticate('oauth-bearer', {session: false}), async (req, res) => {
    const item = new Item({
        title: req.body.title,
        description: req.body.description,
        createdBy: req.authInfo.oid
    });
    try{
        const newItem = await item.save();
        res.status(200).json(newItem);
    } catch(err){
        res.status(400).json({message: err});
    } 
});

/** @desc   Get item using the title
 *  @route  GET /items/getitem/<title>
*/
router.get('/getItem/:title', passport.authenticate('oauth-bearer', {session: false}), async (req, res) => {
    try{
        const item = await Item.findOne({title: req.params.title});
        if(!item) throw Error('ToDo item not found!!');
        res.status(200).json(item); 
    }catch(err){
        res.status(400).json({message: err});
    }
});

/** @desc   Delete item using the title
 *  @route  DELETE /items/deleteItem/<title>
*/
router.delete('/deleteItem/:title', passport.authenticate('oauth-bearer', {session: false}), async (req, res) => {
    try{
        const item = await Item.findOne({title: req.params.title});
        if(!item) return res.send({error: `Item not found.`, message: `Item  "${req.params.title}" not found.`});
        const removedItem = await Item.deleteOne({title: req.params.title});
        res.status(200).json(removedItem); 
    }catch(err){
        res.status(400).json({message: err});
    }
});

/** @desc   Update title of the item by searching the item using title
 *  @route  PATCH /items/updateTitle/<title>
*/
router.patch('/updateTitle/:title', passport.authenticate('oauth-bearer', {session: false}), async (req, res) => {
    try{
        const item = await Item.findOne({title: req.params.title});
        if(!item) return res.send({error: `Item not found.`, message: `Item  "${req.params.title}" not found.`});
        const updatedItem = await Item.updateOne(
            {title: req.params.title}, 
            {$set: {title: req.body.title}}
        );
        if(!item) throw Error('ToDo item not found!!');
        res.status(200).json(updatedItem); 
    }catch(err){
        res.status(400).json({message: err});
    }
});

/** @desc   Update description of the item by searching the item using title
 *  @route  PATCH /items/updateDescription/<title>
*/
router.patch('/updateDescription/:title', passport.authenticate('oauth-bearer', {session: false}), async (req, res) => {
    try{
        const item = await Item.findOne({title: req.params.title});
        if(!item) return res.send({error: `Item not found.`, message: `Item  "${req.params.title}" not found.`});
        const updatedItem = await Item.updateOne(
            {title: req.params.title}, 
            {$set: {description: req.body.description}}
        );
        if(!item) throw Error('ToDo item not found!!');
        res.status(200).json(updatedItem); 
    }catch(err){
        res.status(400).json({message: err}); 
    }
});

/** @desc   Update isComplete for the item by searching the item using title
 *  @route  PATCH /items/isComplete/<title>
*/
router.patch('/updateIsComplete/:title', passport.authenticate('oauth-bearer', {session: false}), async (req, res) => {
    try{
        const item = await Item.findOne({title: req.params.title});
        if(!item) return res.send({error: `Item not found.`, message: `Item  "${req.params.title}" not found.`});
        const updatedItem = await Item.updateOne(
            {title: req.params.title}, 
            {$set: {isCompleted: req.body.isCompleted}}
        );
        res.status(200).send({message: `Updated successfully`, updatedItem}); 
    }catch(err){
        res.status(400).json({message: err});
    }
});


module.exports = router;