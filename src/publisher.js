var Promise = require( 'bluebird' )
var assign = require( 'object-assign' )
var Subscription = require( 'realizehit-subscription' )
var Pattern = Subscription.Pattern
var Redis = require( 'ioredis' )

var debug = require( 'debug' )( 'realizehit:publisher' )

var defaultOptions = {
    redis: 'redis://localhost:6379',
}

function Publisher ( options ) {
    options = this.options = assign( {}, defaultOptions,
        typeof options === 'string' && { redis: options } ||
        typeof options === 'object' && options ||
        {}
    )

    // Setup Redis pub client
    this.redis = new Redis( options.redis )
}

Publisher.prototype.publish = function Publisher$publish ( pattern, payload ) {
    var redis = this.redis

    return Promise.cast( payload )
    .then( JSON.stringify )
    .then(function ( payload ) {
        var channel = (new Pattern( pattern )).stringify()

        debug( "Publishing message on redis (channel %s)", channel )
        return redis.publish( channel, payload )
    })
}
