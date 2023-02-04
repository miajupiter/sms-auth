
# MiaJupiter Sms authentication/verification
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fmiajupiter%2Fsms-auth&count_bg=%236495ED&title_bg=%23323232&icon=cliqz.svg&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

[miajupiter.com](https://miajupiter.com) | [npm package](https://www.npmjs.com/package/miajupiter-sms-auth) | [documentation](https://github.com/miajupiter/sms-auth#readme)


>Note: This package supports only Verimor Sms service.


## Table of contents

- [Installing](#installing)
- [API Functions](#api-functions)
  - [Send Authentication Code](#send-authentication-code)
  - [Send SMS](#send-sms)
  - [Generating auth code](#generating-auth-code)
  - [Is valid phone number?](#is-valid-phone-number)
- [License - MIT License](#license---mit-license)


## Installing

[From npm source](https://www.npmjs.com/package/sms-auth)
```bash
npm install sms-auth
```
[From github](https://github.com/miajupiter/sms-auth)
```bash
npm install https://github.com/miajupiter/sms-auth.git
```

## API Functions

### Send Authentication Code
```js
const sms=require('sms-auth')

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

### Send SMS
```js
const sms=require('sms-auth')

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

### Generating auth code
```js
const sms=require('sms-auth')

const authCode = sms.generateAuthCode()

console.log(authCode)
```
> Output:

```js
// Generate auth code
474639
```

### Is valid phone number?
```js
const sms=require('sms-auth')

const phoneNumber = '101111111111'

console.log(`Is '${phoneNumber}' valid phone number? Result:`, sms.validPhoneNumber())
```

> Output:

```console
Is '101111111111' valid phone number? Result: false
```


## License - MIT License

Copyright (c) 2023-**Now** [MiaJupiter Technology](https://miajupiter.com). All rights reserved. We are proud to be [Open Source](https://opensource.org). For full details about the license, please check the `LICENSE` file in the root directory of the source repository.
