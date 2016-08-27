/**
 * 
 */

function Employee(name) {
	var _name = name;
	var _currentTask;
	var _hoursLeft = 8; 
	
	this.getName = function() {
		return _name;
	}
	
	this.setName = function(newName) {
		if(!newName) {
			return "Type a name";
		}
		
		return _name = newName;
	}
	
	this.getCurrentTask = function() {
		return _currentTask;
	}
	
	this.setCurrentTask = function(task) {
		return _currentTask = task;
	}
	
	this.getHoursLeft = function() {
		return _hoursLeft;
	}
	
	this.setHoursLeft = function(newHoursLeft) {
		if (newHoursLeft < 0) {
			return "It`s time to go home and rest";
		}
		
		return _hoursLeft = newHoursLeft;
	}
	
}

Employee.prototype.work = function() {
	
	if(this.getCurrentTask().getName()) {
		var diffеrence = Math.abs(this.getHoursLeft() - this.getCurrentTask().getHours());
		
		if (this.getCurrentTask().getHours() > this.getHoursLeft()) {
			this.getCurrentTask().setHours(diffеrence);
			this.setHoursLeft(0);
		}
		
		if (this.getHoursLeft() > this.getCurrentTask().getHours()) {
			this.setHoursLeft(diffеrence);
			this.getCurrentTask().setHours(0);
		}
	}
	
	return this.showReport();
}

Employee.prototype.showReport = function() {
	return "Employee`s name: " + this.getName() + "\n" + "Current task: " + this.getCurrentTask().getName() + "\n" +
			"Employee left working hours: " + this.getHoursLeft() + "\n" + "Left hours for task: " + this.getCurrentTask().getHours();
}