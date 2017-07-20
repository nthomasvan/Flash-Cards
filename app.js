var basicCard = require = ('./basic-flashcard.js');
var clozeCard = require = ('./cloze-flashcard.js');

var inquire = require('inquirer');

var fs = require('fs');

inquire.prompt([{
	name: 'command',
	message: 'What kind of card do you want?'
	//type: 'list',
	//choices: [{
	// 	name: 'add-basic'
	// },{
	// 	name: 'add-cloze'
	// }]
}]).then(function(choice){
	if(choice.command === 'add-basic'){
		addBasicCard();
	}
	else if(answer.command === 'add-cloze'){
		addCloze();
	}
})

