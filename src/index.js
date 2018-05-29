export default function application() {

var result;

	function romanizerNumerals(number) {
		var numerals = [
			{ value: 1000, roman: 'M' },
			{ value: 900, roman: 'CM' },
			{ value: 500, roman: 'D' },
			{ value: 400, roman: 'CD' },
			{ value: 100, roman: 'C' },
			{ value: 90, roman: 'XC' },
			{ value: 50, roman: 'L' },
			{ value: 40, roman: 'XL' },
			{ value: 10, roman: 'X' },
			{ value: 9, roman: 'IX' },
			{ value: 5, roman: 'V' },
			{ value: 4, roman: 'IV' },
			{ value: 1, roman: 'I' }
		];
		var remaining = number;
		var result = '';

		if (number >= 5000) {
			return 'Sorry, the Romans could not count this high!';
		}
		if (number <= 0) {
			return 'Sorry, the Romans did not use number lower than 1!';
		}

		numerals.forEach(function(numeral) {
		 	while (remaining >= numeral.value) {
				result += numeral.roman;
				remaining -= numeral.value;
			}
		});
		return result;
	}

	function getRomanNumeral(event) {
		event.preventDefault();
		result = document.querySelector('#result__operation');
		var romanNum = romanizerNumerals(event.target[0].value);
		result.classList.toggle('hidden');
		result.innerHTML = romanNum;
	}

	function start() {
		var form = document.querySelector('#js-form');
		form.addEventListener('submit', function() {
			getRomanNumeral(event);
		});
	}

	return {
		start: start,
		romanizerNumerals: romanizerNumerals
	}
}
