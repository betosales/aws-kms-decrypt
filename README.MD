# AWS KM Decrypt Script

first of all you need to create a .env file in your directory or setup your environment variables as you wish.

envs:
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- KMS_KEY_ID

you need to install all project dependencies
```shell
npm install
```

to run this script just type in your shell
```shell
node decrypt.js YOUR_ENCRYPTING_TEXT
```