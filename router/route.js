const express=require('express');
const router=express.Router();

const {Insert,View,View1,Delete,Update}=require('../controller/ExeCon')

router.post('/insert',Insert);
router.get('/view',View);
router.get('/single/:id',View1);
router.delete('/delete/:id',Delete)
router.put('/up/:id',Update)
module.exports=router;