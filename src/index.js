'use strict';

const arrGroups = [
	'FE2021-5',
	'Fe2020-2',
	'FD2021',
	'fD2022-1',
	'FE2020-3',
	'FD2020/2',
	'fe2021-3',
	'FD2020$5',
	'FE2008-52',
	'Fm2008-23',
	'FM2022-1',
	'fd2023-1',
	'+FM2022-1',
	'FM2022-1dsdsdsa',
	'FM2022-1656464654',
	'FM1999-1',

];

const regExp = /^(?<letterGroups>F[DME]|f[dme])(?<yearGroups>20\d{2})(-(?<numberGroups>\d+))?$/u;

const chekArrGroups = (arr, regExp) => {
	arr.forEach(element => {
		regExp.test(element) ? console.log(`${element} - Success`) : console.log(`${element} - Error`)
	});
}

chekArrGroups(arrGroups, regExp);
