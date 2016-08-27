/**
 * 
 */

function Computer(year, price, isNotebook, hardDiskMemory, freeMemory, operationSystem) {

	this.year = year;
	this.price = price;
	this.isNotebook = isNotebook;
	this.hardDiskMemory = hardDiskMemory;
	this.freeMemory = freeMemory;
	this.operationSystem = operationSystem;
	
}

Computer.prototype.changeOperationSystem = function(op) {
	return this.operationSystem = op;
}

Computer.prototype.useMemory = function(memory) {
	if (memory > this.freeMemory) {
		return "Not enough free memory!";
	}
	
	return this.freeMemory -= memory;
}