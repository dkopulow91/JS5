var mapping = {
  'A8': '♜',
  'B8': '♞',
  'C8': '♝',
  'D8': '♛',
  'E8': '♚',
  'F8': '♝',
  'G8': '♞',
  'H8': '♜',
  'A7': '♟',
  'B7': '♟',
  'C7': '♟',
  'D7': '♟',
  'E7': '♟',
  'F7': '♟',
  'G7': '♟',
  'H7': '♟',
  'A1': '♖',
  'B1': '♘',
  'C1': '♗',
  'D1': '♕',
  'E1': '♔',
  'F1': '♗',
  'G1': '♘',
  'H1': '♖',
  'A2': '♙',
  'B2': '♙',
  'C2': '♙',
  'D2': '♙',
  'E2': '♙',
  'F2': '♙',
  'G2': '♙',
  'H2': '♙',
}


var $marking = document.createElement('div'); 
$marking.classList.add('marking');

var $chess = document.createElement('div');
$chess.id = 'chess';
$chess.classList.add('marking-wrap');

var $digits = document.createElement('ul');
$digits.classList.add('vertical-right', 'border');

var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

var $letters = document.createElement('ul');
$letters.classList.add('horisontal-top', 'border');



for (var i = 0; i < 8; i++) { 
	var $row = document.createElement('div'); 
	$row.classList.add('row');

	var $liD = document.createElement('li');
	$liD.textContent = i + 1;
	$digits.appendChild($liD);

	var $liL = document.createElement('li');
	$liL.textContent = String.fromCharCode(65 + i);
	$letters.appendChild($liL);

	for (var j = 0; j < 8; j++) {
		var $cell = document.createElement('div'); 
		$cell.classList.add('box');

		var coordinat = String.fromCharCode(65 + j) + (8 - i);

		$cell.textContent = mapping[coordinat];
		$row.appendChild($cell); 
	}


	$chess.appendChild($row); 
}

var $digitsLeft = $digits.cloneNode(true); // подсмотрел на уроке разбор
$digitsLeft.classList.remove('vertical-right', 'border');
$digitsLeft.classList.add('vertical-left', 'border');

var $lettersBottom = $letters.cloneNode(true);
$lettersBottom.classList.remove('horisontal-top', 'border');
$lettersBottom.classList.add('horisontal-bottom', 'border');


$marking.appendChild($digits);
$marking.appendChild($digitsLeft);
$marking.appendChild($letters);	
$marking.appendChild($lettersBottom);
$marking.appendChild($chess);
document.body.appendChild($marking);
