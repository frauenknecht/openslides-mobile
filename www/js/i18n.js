
angular.module('osl')

.config(function ($translateProvider) {
	
	$translateProvider
	
	.translations('en', {
		MENU_PROJECTOR: 'Projector',
		MENU_AGENDA: 'Agenda',
		MENU_MOTIONS: 'Motions',
		MENU_ELECTIONS: 'Elections',
		MENU_PARTICIPANT: 'Participant',
		MENU_PARTICIPANTS: 'Participants',
		MENU_FILES: 'Files',
		MENU_LOGIN: 'Login',
		MENU_LOGOUT: 'Logout',		
		MENU_SETTINGS: 'Settings',
		
		USER_SEARCH: 'Search a user',
		USER_PRESENT: 'Present',
		
		LOGIN_USERNAME: 'Username',
		LOGIN_PASSWORD: 'Password',
		
		SETTINGS_SERVER: 'Server',
		SETTINGS_PROTOCOL: 'Protocol',
		SETTINGS_URL: 'Server URL',
		SETTINGS_PORT: 'Server Port',
		SETTINGS_LANGUAGE: 'Language',
		SETTINGS_GERMAN: 'German',
		SETTINGS_ENGLISH: 'English'		
	})

	.translations('de', {
		MENU_PROJECTOR: 'Projektor',
		MENU_AGENDA: 'Tagesordnung',
		MENU_MOTIONS: 'Anträge',
		MENU_ELECTIONS: 'Wahlen',
		MENU_PARTICIPANT: 'Teilnehmer/in',
		MENU_PARTICIPANTS: 'Teilnehmer/innen',
		MENU_FILES: 'Dateien',
		MENU_LOGIN: 'Anmelden',
		MENU_LOGOUT: 'Abmelden',		
		
		MENU_SETTINGS: 'Einstellungen',

		USER_SEARCH: 'Nach Benutzer suchen',
		USER_PRESENT: 'Anwesend',

		LOGIN_USERNAME: 'Benutzername',
		LOGIN_PASSWORD: 'Passwort',
		
		SETTINGS_SERVER: 'Server',
		SETTINGS_PROTOCOL: 'Protokoll',
		SETTINGS_URL: 'Server URL',
		SETTINGS_PORT: 'Server Port',						
		SETTINGS_LANGUAGE: 'Sprache',		
		SETTINGS_GERMAN: 'Deutsch',
		SETTINGS_ENGLISH: 'Englisch'				
	})

    .registerAvailableLanguageKeys(['en', 'de'], {
       'en_US': 'en',
       'en_us': 'en',		
       'en_UK': 'en',
       'en_uk': 'en',		
       'de_DE': 'de',
       'de_de': 'de',		
       'de_CH': 'de',
       'de_ch': 'de',
       'de_AT': 'de',
	   'de_at': 'de'
     })

	.determinePreferredLanguage();
});
	