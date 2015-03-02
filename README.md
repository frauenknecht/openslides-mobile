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
	* Apache Cordova CLI ```[sudo] npm install -g cordova```
	* Ionic CLI ```[sudo] npm install -g ionic ```
	
3. Setup for iOS platform on a Mac   
	* Download Xcode from the Apple developer site or get it from the Mac App Store. You will also need the Command-Line-Tools. The Command-Line-Tools can be installed from the Downloads tab in Xcode Preferences.
	* To be able to run app in iOS-Simulater or on a Device from the command line, install:
	 ```
	 [sudo] npm install -g ios-sim
	 [sudo] npm install -g ios-deploy
	 ```

4. Setup for android platform
	* TODO
	
5. Add platforms to your project
	* ```ionic platform ios``` (on a Mac)
	* ```ionic platform android```
		
6. Install all npm and bower packages
	* ```npm install```
	* ```node_modules/.bin/bower install```
