let config = {};

// web configs
config.web = {};
config.web.port = process.env.PORT || '3000';
config.web.encryption_key = 's3cret';

// database configs - dev
config.database = {};
config.database.username = 'admin';
config.database.password = 'nodequiz1';
config.database.port = '17866';
config.database.url = 'ds117866.mlab.com';
config.database.name = 'nodequiz';


module.exports = config;