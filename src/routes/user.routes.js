const express = require("express");
const router = express.Router();

const controller = require("../controllers/user.controller");
//all routes
router.use((req,res,next)=>{
    const auth =req.session.auth;
    if(auth){ // neu da dang nhap roi se chuyen ve trang chu
        return res.redirect("/");
    }
  next();
});
 //only register
router.use("/register",(req,res,next) => {
    // res.send("Time"+Date.now());
    next(); //di tiep
});

router.get("/login", controller.login);
router.post("/login", controller.postLogin);

router.get("/register", controller.register);
router.post("/register", controller.postRegister);

module.exports = router;
