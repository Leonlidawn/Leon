import english from 'src/locales/en-US';
import chinese from 'src/locales/zh-CN';
import { LANGUAGE } from 'src/constants/language';
import _ from 'lodash';

export function format(language, id) {
	let text = '';
	const defaultLanguage = english;

	switch (language) {
		case LANGUAGE.ENGLISH:
			text = _.get(english, id, defaultLanguage[id])
			break;
		case LANGUAGE.CHINESE:
			text = _.get(chinese, id, defaultLanguage[id])
			break;
		default:
			text = defaultLanguage[id]
			break;
	}
	if (!text) text = id
	return text;
}