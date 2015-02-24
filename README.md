# openslides-mobile
Moble Apps for the OpenSlides project.

## Requirements
openslides-mobile is the mobile app currently for Apple iOS and Android. It is based on the following frameworks and tools:

* [Ionic Framework](http://ionicframework.com)
* [Apache Cordova](http://cordova.apache.org)
* [AngularJS](https://angularjs.org)
* [SASS](http://sass-lang.com)

### Setup for development
To setup your development box, follow these steps:

1. Download and install node.js from http://nodejs.org

2. Install the following node modules: 
	```
	[sudo] npm install -g bower
	[sudo] npm install -g gulp
	[sudo] npm install -g cordova
	[sudo] npm install -g ionic
	```


3. Setup for iOS platform on a Mac   
	* Download Xcode from the Apple developer site or get it from the Mac App Store. You will also need the Command-Line-Tools. The Command-Line-Tools can be installed from the Downloads tab in Xcode Preferences.
	* Make a ```sudo npm update -g ios-sim``` to be able to start iOS-Simulater from the command line.
