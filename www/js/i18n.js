
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
		MENU_SETTINGS: 'Settings',
		
		USER_SEARCH: 'Search a user',
		
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
		MENU_SETTINGS: 'Einstellungen',

		USER_SEARCH: 'Nach Benutzer suchen',
		
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
	