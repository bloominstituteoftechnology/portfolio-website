'use strict'

var request = require('superagent')

var AMPLITUDE_TOKEN_ENDPOINT = 'https://api.amplitude.com'
var AMPLITUDE_DASHBOARD_ENDPOINT = 'https://amplitude.com/api/2'

var camelCaseToSnakeCasePropertyMap = Object.freeze({
  userId: 'user_id',
  deviceId: 'device_id',
  sessionId: 'session_id',
  eventType: 'event_type',
  eventProperties: 'event_properties',
  userProperties: 'user_properties',
  appVersion: 'app_version',
  osName: 'os_name',
  deviceBrand: 'device_brand',
  deviceManufacturer: 'device_manufacturer',
  deviceModel: 'device_model',
  deviceType: 'device_type',
  locationLat: 'location_lat',
  locationLng: 'location_lng'
})

function Amplitude (token, options) {
  if (!token) {
    throw new Error('No token provided')
  }

  options = options || {}

  this.token = token
  this.secretKey = options.secretKey
  this.userId = options.userId || options.user_id
  this.deviceId = options.deviceId || options.device_id
  this.sessionId = options.sessionId || options.session_id
}

Amplitude.prototype._generateRequestData = function (data) {
  var passedDataIsArray = Array.isArray(data)
  var arrayedData = passedDataIsArray ? data : [data]

  var transformedDataArray = arrayedData.map(function (item) {
    var transformedData = Object.keys(item).reduce(function (obj, key) {
      var transformedKey = camelCaseToSnakeCasePropertyMap[key] || key

      obj[transformedKey] = item[key]

      return obj
    }, {})

    transformedData.user_id = transformedData.user_id || this.userId
    transformedData.device_id = transformedData.device_id || this.deviceId
    transformedData.session_id = transformedData.session_id || this.sessionId

    return transformedData
  }, this)

  return passedDataIsArray ? transformedDataArray : transformedDataArray[0]
}

Amplitude.prototype.identify = function (data) {
  var transformedData = this._generateRequestData(data)
  var params = {
    api_key: this.token,
    identification: JSON.stringify(transformedData)
  }

  return postBody(AMPLITUDE_TOKEN_ENDPOINT + '/identify', params)
}

Amplitude.prototype.track = function (data) {
  var transformedData = this._generateRequestData(data)
  var params = {
    api_key: this.token,
    event: JSON.stringify(transformedData)
  }

  return postBody(AMPLITUDE_TOKEN_ENDPOINT + '/httpapi', params)
}

Amplitude.prototype.export = function (options) {
  options = options || {}

  if (!this.secretKey) {
    throw new Error('secretKey must be set to use the export method')
  }

  if (!options.start || !options.end) {
    throw new Error('`start` and `end` are required options')
  }

  return request.get(AMPLITUDE_DASHBOARD_ENDPOINT + '/export')
    .auth(this.token, this.secretKey)
    .query({
      start: options.start,
      end: options.end
    })
}

Amplitude.prototype.userSearch = function (userSearchId) {
  if (!this.secretKey) {
    throw new Error('secretKey must be set to use the userSearch method')
  }

  if (!userSearchId) {
    throw new Error('value to search for must be passed')
  }

  return request.get(AMPLITUDE_DASHBOARD_ENDPOINT + '/usersearch')
    .auth(this.token, this.secretKey)
    .query({
      user: userSearchId
    })
    .set('Accept', 'application/json')
    .then(function (res) {
      return res.body
    })
}

Amplitude.prototype.userActivity = function (amplitudeId, data) {
  data = data || {}
  data.user = amplitudeId

  if (!this.secretKey) {
    throw new Error('secretKey must be set to use the userActivity method')
  }

  if (!amplitudeId) {
    throw new Error('Amplitude ID must be passed')
  }

  return request.get(AMPLITUDE_DASHBOARD_ENDPOINT + '/useractivity')
    .auth(this.token, this.secretKey)
    .query(data)
    .set('Accept', 'application/json')
    .then(function (res) {
      return res.body
    })
}

Amplitude.prototype.eventSegmentation = function (data) {
  if (!this.secretKey) {
    throw new Error('secretKey must be set to use the eventSegmentation method')
  }

  if (!data || !data.e || !data.start || !data.end) {
    throw new Error('`e`, `start` and `end` are required data properties')
  }

  if (typeof data.e === 'object') {
    data.e = JSON.stringify(data.e)
  }

  return request.get(AMPLITUDE_DASHBOARD_ENDPOINT + '/events/segmentation')
    .auth(this.token, this.secretKey)
    .query(data)
    .set('Accept', 'application/json')
    .then(function (res) {
      return res.body
    })
}

function postBody (url, params) {
  var encodedParams = Object.keys(params).map(function (key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
  }).join('&')

  return request.post(url)
    .send(encodedParams)
    .type('application/x-www-form-urlencoded')
    .set('Accept', 'application/json')
    .then(function (res) {
      return res.body
    })
}

module.exports = Amplitude
