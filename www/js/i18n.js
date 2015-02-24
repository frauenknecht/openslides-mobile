
angular.module('osl')

.config(function ($translateProvider) {
	
	$translateProvider.translations('en_US', {
		MENU_PROJECTOR: 'Projector',
		MENU_AGENDA: 'Agenda',
		MENU_MOTIONS: 'Motions',
		MENU_ELECTIONS: 'Elections',
		MENU_PARTICIPANTS: 'Participants',
		MENU_FILES: 'Files',
		MENU_SETTINGS: 'Settings',
		
		SETTINGS_LANGUAGE: 'Language',
		SETTINGS_GERMAN: 'German',
		SETTINGS_ENGLISH: 'English'		
	});

	$translateProvider.translations('de_DE', {
		MENU_PROJECTOR: 'Projektor',
		MENU_AGENDA: 'Tagesordnung',
		MENU_MOTIONS: 'Anträge',
		MENU_ELECTIONS: 'Wahlen',
		MENU_PARTICIPANTS: 'Teilnehmer',
		MENU_FILES: 'Dateien',
		MENU_SETTINGS: 'Einstellungen',

		SETTINGS_LANGUAGE: 'Sprache',		
		SETTINGS_GERMAN: 'Deutsch',
		SETTINGS_ENGLISH: 'Englisch'				
	});

	//$translateProvider.preferredLanguage('en_US');
	$translateProvider.determinePreferredLanguage();
});
	