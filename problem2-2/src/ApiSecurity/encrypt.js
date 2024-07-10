const { Router } = require('express');
const router = new Router();
const crypto = require('crypto')

const algorithm = 'aes-256-ctr'
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3'

router.get('/:password', async (req, res) => {
    try{
        const { password } = req.params;
        const iv = '8fdb43a3846a8807259fc76b4e54e4a6'
        const cipher = crypto.createCipheriv(algorithm, secretKey, Buffer.from(iv, 'hex'));
        const encrypted = Buffer.concat([cipher.update(password), cipher.final()]);
        const pass = encrypted.toString('hex');
        res.status(200).json(pass.toString());
    } catch (error){
        res.status(500).json({ error: error.message });
    }

});
module.exports = router;