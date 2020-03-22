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

export function copyToClipboard(id) {
	const text = document.getElementById(id);
	const selection = window.getSelection();
	const range = document.createRange();
	range.selectNodeContents(text);
	selection.removeAllRanges();
	selection.addRange(range);
	document.execCommand('copy');
}

export function isInViewPort(element) {
	const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
	//el.offsetTop - document.documentElement.scrollTop
	const top = element.getBoundingClientRect().top
	console.log('top', top, top <= viewPortHeight + 100)
	return top <= viewPortHeight - 200
} 