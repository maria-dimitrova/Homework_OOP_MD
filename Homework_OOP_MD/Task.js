/**
 * 
 */

function Task(name, hours) {
	var _name = name;
	var _workingHours = hours;
	
	this.getName = function() {
		return _name;
	}
	
	this.setName = function(newName) {
		return _name = newName;
	}
	
	this.getHours = function() {
		return _workingHours;
	}
	
	this.setHours = function(newHours) {
		return _workingHours = newHours;
	}
}