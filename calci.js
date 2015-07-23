/*
 * Basic Calculator
 * 10 July 2015
 */


var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var da = false;
var flag=0;
for(var i = 0; i < keys.length; i++) {									// loops on all keys
	keys[i].onclick = function() {										// function gets called when a particular key is pressed
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		if(btnVal == 'DEL') {											// if del is pressed decrease the length of number by 1
			flag = 0;
			da = false;
				input.innerHTML=inputVal.substr(0,inputVal.length-1);
		}
				
		else if(btnVal == '=') {						 
			var equation = inputVal;
			equation = equation.replace(/x/, '*').replace(/÷/, '/')
			.replace(/oo/, 'Infinity') ;								// replaces the expression with specific operators 
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')		// for the eval function to operate	
				equation = equation.replace(/.$/, '');
				input.innerHTML = eval(equation).toFixed(2);
				if(eval(equation)=='Infinity'){							// gives 00 as output when infinity is encountered
				input.innerHTML = 'oo';
			}	
							flag = 1;
				da=false;
		}		
		else if(operators.indexOf(btnVal) > -1) {						// only if the operators have an index more than -1 
			flag = 0;													// are taken i.e. the operators cant be added simultaneoulsy	
			var lastChar = inputVal[inputVal.length - 1];
			if(inputVal != '' && operators.indexOf(lastChar) == -1)     // removes the error when operators are added first
				input.innerHTML += btnVal;
			else if(inputVal == '' && btnVal == '-') 					// negative number
				input.innerHTML += btnVal;
			da= false;
		}
				else if(btnVal == '.') {								// adding decimal point
			if(!da) {
				input.innerHTML += btnVal;
				da = true;
			}
		}
		else {
			if(flag==1)
			input.innerHTML = '';
			input.innerHTML += btnVal;
			flag=0;
		}
	}
}
