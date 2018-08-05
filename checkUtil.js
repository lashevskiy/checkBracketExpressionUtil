export function checkBracketExpression(exp) {
	let stack = [];
	let topStack;
	let currElement;

	for (let i = 0; i <= exp.length - 1; i++) {
		currElement = exp[i];

		if(['(', '[', '{'].indexOf(currElement) != -1) {
			stack.push(currElement);
        } else if([')', ']', '}'].indexOf(currElement) != -1) {
			topStack = stack.pop();
			
			if(topStack == undefined) {
				return false;
			}

			if(!(topStack == '(' && currElement == ')' ||
			   topStack == '[' && currElement == ']' ||
			   topStack == '{' && currElement == '}')) {
			   return false;
			}
           
		}
	}

	return stack.length == 0;
}