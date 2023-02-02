# MiaJupiter Sms authentication via Verimor

Sms atuhentication package

## Send Authentication Code
```javascript
import sms from '@miajupiter/sms-auth-verimor'

const messageTemplate='This is your auth code:{authCode}'
const username='' // verimor username
const password='' // verimor password

sms.sendAuthCode(username, password, recipient, messageTemplate)
  .then(resp=>console.log(resp))
  .catch(err=>console.error(err))

```




## Send SMS
```javascript
import sms from '@miajupiter/sms-auth-verimor'

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

## Generating auth code
```javascript
import sms from '@miajupiter/sms-auth-verimor'

const authCode = sms.generateAuthCode()

console.log(authCode)
```
> Output:

`474639`
