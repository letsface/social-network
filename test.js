var share = require('./index')

//access_token can only be fetched after oauth2 authorization
//This is a test access_token
var params = {access_token: "CAAT8EVVYeGYBAEW8xKMZAK71xh95vZBLTrXCkeDr2GugeyF6LVHinXZBeuxh4ZBtffZAmTpa73z6cRihd3VzZAjvXRc4iVCzJJxP7wC3ZAoptxpYXQuzyFInQAHjV0korEFse1anj3ZAjiI8Tlxo21H4vD6FSNbwmjpTYmYmxjTuGNNNzBbZCk3kCQiJGrtMIicoZD"}
var Fbshare = share("Facebook", params)
Fbshare.shareUrl("www.google.com")
