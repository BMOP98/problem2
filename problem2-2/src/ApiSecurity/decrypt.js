const { Router } = require('express');
const router = new Router();
const crypto = require('crypto')



router.get('/:password', async (req, res) => {
    
    try{
        const algorithm = "aes-256-ctr"
        const secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3"
        const { password } = req.params;
        const iv = "8fdb43a3846a8807259fc76b4e54e4a6"
        const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(iv, 'hex'))
        let decrpyted = decipher.update(Buffer.from(password, 'hex'));
        decrpyted = Buffer.concat([decrpyted, decipher.final()]);
        const pass = decrpyted
        res.status(200).json(pass.toString());
        
    } catch (error){
        res.status(500).json({ error: error.message })
    }

});
module.exports = router;




