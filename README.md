# publisher [![Build Status](https://travis-ci.org/realizehit/publisher.svg?branch=master)](https://travis-ci.org/realizehit/publisher)
realizehit publisher

This modules purpose is to be used from within your app in case you don't want
to use [server-api](https://github.com/realizehit/server-api) for publishing your payloads.

Probably you might want to use [realizehit/realizehit](https://github.com/realizehit/realizehit) instead.

## Usage

#### Run as NPM module

```bash
npm i -g realizehit-publisher
```

```javascript
var Publisher = require( 'realizehit-publisher' )

var publisher = new Publisher( 'redis://redis-host:6379' )

// Publish a payload into { foo: 'bar' } subscription
publisher.publish(
    { foo: 'bar' },
    'Hello world'
)
```

## Contributing

### Running with node

```bash
npm install
npm test
```
