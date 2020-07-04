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

/**
 * Checks if an element is above the bottom 5% of viewport.
 * @param {Element} element the html element you are observing
 * @return true || false
 */
export function isInOrAboveViewPort(element) {
	const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
	const top = element.getBoundingClientRect().top
	return top <= viewPortHeight * 0.95
}