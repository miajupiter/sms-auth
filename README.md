# MiaJupiter Sms authentication/verification

>Note: This package supports only Verimor Sms service.

github: https://github.com/miajupiter/sms-auth-verimor


## Table of contents

- [Install](#install)
- [Send Authentication Code](#send-authentication-code)
- [Send SMS](#send-sms)
- [Generating auth code](#generating-auth-code)
- [Is valid phone number](#is-valid-phone-number)

## Install

[From github](https://github.com/miajupiter/sms-auth-verimor)
```bash
npm install https://github.com/miajupiter/sms-auth-verimor.git
```

From npm source
```bash
npm install @miajupiter/sms-auth-verimor
```


## Send Authentication Code
```js
const sms=require('@miajupiter/sms-auth-verimor')

const messageTemplate='This is your auth code:{authCode}'
const username='' // verimor username
const password='' // verimor password
const recipient='target phone number'

sms.sendAuthCode(username, password, recipient, messageTemplate)
  .then(resp=>console.log(resp))
  .catch(err=>console.error(err))
```
> Output:

```js
// Random generated auth code sent to target phone number
474639  
```

## Send SMS
```js
const sms=require('@miajupiter/sms-auth-verimor')

sms.sendSms({
    url:'https://sms.verimor.com.tr/v2/send.json',
    method:'POST',
    data:{
      username: '',
      password: '',
      messages:[{
        msg:'Hello, world.',dest:'<phone number>'
      }]
    }
  })
  .then(resp=>console.log(resp))
  .catch(err=>console.error(err))

```

> Output:
```js
HttpStatus: 200 OK

{ status: 200, data: 318438489 }
```

## Generating auth code
```js
const sms=require('@miajupiter/sms-auth-verimor')

const authCode = sms.generateAuthCode()

console.log(authCode)
```
> Output:

```js
// Generate auth code
474639
```

## Is valid phone number
```js
const sms=require('@miajupiter/sms-auth-verimor')

const phoneNumber = '101111111111'

console.log(`Is '${phoneNumber}' valid phone number? Result:`, sms.validPhoneNumber())
```

> Output:

```console
Is '101111111111' valid phone number? Result: false
```