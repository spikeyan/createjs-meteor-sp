Package.describe({
	name: 'spikeyan:createjs',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: 'EaselJS 0.8.2, TweenJS 0.6.2',
		// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/spikeyan/createjs-meteor-sp.git',
		// By default, Meteor will default to using README.md for documentation.
		// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.1');
  api.addFiles('createjs-0.8.2-sp.js', 'client');
});