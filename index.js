/**
 * @license Copyright (c) 2023-Now, MiaJupiter Technology. All rights reserved.
 * For licensing, see LICENSE
 */

import axios from 'axios'

/**
 * Sends SMS messages to one or more recipients
 * 
 * @options : {
 *    url: string  default 'https://sms.verimor.com.tr/v2/send.json',
 *    method: string default 'POST',
 *    data:{
 *        username: string, //verimor sms sender username
 *        password: string, //verimor sms sender password
 *        messages:[{
 *            dest: string, // phone number
 *            msg: string   // sms message
 *        }]
 *    }
 * }
 * @returns promise
 * Note: You must have entered your server IP address at https://oim.verimor.com.tr/sms_settings/edit
*/
exports.sendSms = (options) => new Promise((resolve, reject) => {
  axios({
    url: options.url || 'https://sms.verimor.com.tr/v2/send.json',
    method: options.method || 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    rejectUnauthorized: false,
    data: JSON.stringify(data),
    timeout: 50000
  })
    .then(resolve)
    .catch(reject)
})

/**
 * 
 * @param {number} min optional lower bound
 * @param {number} max optional upper bound
 * @returns {string}  6 digit authentication code string
 */
exports.generateAuthCode = (min, max) => {
  min = min || 128001
  max = max || 997040
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 
 * @param {string} recipient phone number
 * @param {string} messageTemplate optional SMS message template
 * @returns {Promise} 
 *  - resolve(value)  value is sent authCode number (6 digits)
 *  - reject(err) returns error object
 */

exports.sendAuthCode = (username, password, recipient, messageTemplate) => new Promise((resolve, reject) => {
  if (exports.validPhoneNumber(recipient)) {
    let msg = messageTemplate || '{authCode} is your auth code.'
    let authCode = exports.generateAuthCode()
    msg = msg.replaceAll('{authCode}', authCode)
    exports.sendSms({
      data:{
        username: username,
        password: password,
        messages:[{
          dest:recipient,
          msg:msg
        }]
      }
    })
    .then(()=>resolve(authCode))
    .catch(reject)

  } else {
    reject('Invalid phone number')
  }
})


/**
 * 
 * @param {string} tel 
 * @returns boolean
 */

exports.validPhoneNumber = function (tel) {
  if (tel.trim() == '') return false
  var bFound = false
  for (var i = 0; i < tel.length; i++) {
    if (!((tel[i] >= '0' && tel[i] <= '9') || tel[i] == '+')) {
      return false
    }
  }
  return true
}