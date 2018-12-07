export default class HomeController {
	constructor($log, $mdDialog) {
		'ngInject';
    // this.$mdDialog = $mdDialog;
		this.$log = $log;
	}

	$onInit = () => {
		this.heading = ':D';
		this.$log.info('Activated Home View.');
    this.tabs = [{
      title: 'tabTitle1',
      content: 'tab content 1 ahshsa'
    },{
      title: 'tabTitle2',
      content: 'tab content 2 hoahwodhoqwe',
      disabled: false
    },];
	};
}
