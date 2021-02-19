const AWS = require('aws-sdk');

require('dotenv').config()

// console.log(process.env)

var kms = new AWS.KMS({
    apiVersion: '2014-11-01',
    region: 'sa-east-1'
});

console.log("<<<INIT DECRYPT>>>")

const params = {

    CiphertextBlob: Buffer.from(process.argv[2], 'base64'),

    EncryptionAlgorithm: 'RSAES_OAEP_SHA_1',

    KeyId: process.env.KMS_KEY_ID

};

kms.decrypt(params,
    function (err, data) {

        if (err)
            // an error occurred
            console.error(err, err.stack);

        else {

            console.log('<<<<<<DECRYPTED>>>>>>')

            console.log(data.Plaintext.toString("utf-8"));

            console.log('<<<<<<DECRYPTED>>>>>>')

        }

    });