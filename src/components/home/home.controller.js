export default class HomeController {
	constructor($log, $mdDialog) {
		'ngInject';
    // this.$mdDialog = $mdDialog;
		this.$log = $log;
	}

	$onInit = () => {
		this.heading = ':D';
		this.$log.info('Activated Home View.');
    // this.$mdDialog.show({
    //   contentElement: '#myDialog',
    //   clickOutsideToClose: true
    // });
	};
}
