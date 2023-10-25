var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "YOUR 41c1e01257c8408f4fe0379222116ba6db89d271 TOKEN"

var api = new StravaApiV3.ActivitiesApi()

var id = 9842528488; // {Long} The identifier of the activity.

var opts = { 
  'includeAllEfforts': true // {Boolean} To include all segments efforts.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getActivityById(id, opts, callback);