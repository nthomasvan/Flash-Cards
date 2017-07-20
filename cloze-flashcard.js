var fs = require("fs");

function ClozeFlash(text,cloze){
	this.text = text;
	this.cloze = cloze;
	this.clozeDeleted = this.text.replace(this.cloze, '-----');
}

module.exports = ClozeFlash;