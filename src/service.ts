export class AppService {
	// private static phone = '555533523299';
	private static phone = '5551995909864';

	private static wpp_base_url = 'https://wa.me/';

	private static simple_message =
		'Olá! Visitei seu site e gostaria de mais informações sobre planos.';

	private static company_message =
		'Olá! Visitei seu site e gostaria de mais informações sobre planos para minha empresa.';

	private static open_company_message =
		'Olá! Visitei seu site e gostaria de mais informações para abrir minha empresa.';

	static linkMsgSender(variant: 'sample' | 'company' | 'open_company' = 'sample') {
		let message = this.simple_message;

		switch (variant) {
			case 'sample':
				message = this.simple_message;
				break;

			case 'company':
				message = this.company_message;
				break;

			case 'open_company':
				message = this.open_company_message;
				break;

			default:
				message = this.simple_message;
				break;
		}

		const wppUrl = `${this.wpp_base_url}${this.phone}?text=${encodeURIComponent(message)}`;

		return wppUrl;
	}
}
