/* 질문
 * `handleInput` 함수명 적절한가?
**/

var Spinbox = function() {
	this.value = 200;
    this.MIN_VALUE = 100;
    this.MAX_VALUE = 300;

	this.assignElement();
    this.bindEvents();
    this.updateValue(this.value);
};

Spinbox.prototype.assignElement = function() {
    this.$plusBtn = $('.plusBtn');
    this.$minusBtn = $('.minusBtn');
    this.$valueInput = $('.valueInput');
};

Spinbox.prototype.timeoutIncrease = function () {
    this.increase();
    var timeout = setTimeout(this.intervalIncrease, 400);
    this.$plusBtn.on('mouseup', this.decrease.bind(this));
};

Spinbox.prototype.intervalIncrease = function () {
    console.log("HI");
    // this.increase();
    // setTimeout(this.increase)
};


Spinbox.prototype.increase = function() {
	this.updateValue(this.value + 1);
};

Spinbox.prototype.decrease = function() {
    this.updateValue(this.value - 1);
};

Spinbox.prototype.bindEvents = function() {
    /*
     * 직후
       * increase
       * setTimeout(setInterval, 400)
       * mousedown시 clearTimeout(), clearInterval
     * setInterval
       * 0.1초 마다 increase
    **/
    // this.$plusBtn.on('mousedown', this.increase.bind(this));
    this.$plusBtn.on('mousedown', this.timeoutIncrease.bind(this));
    this.$minusBtn.on('mousedown', this.decrease.bind(this));
    this.$valueInput.on('change', this.handleInput.bind(this));
};

Spinbox.prototype.destroy = function () {
    this.$plusBtn.off('mousedown');
    this.$minusBtn.off('mousedown');
    this.$valueInput.off('change');
}

Spinbox.prototype.handleInput = function (event) {
    this.updateValue(Number(this.$valueInput.val()));
};

Spinbox.prototype.updateValue = function(newValue) {
    if(!this._validate(newValue)) {
        newValue = this.value;
    }
    this._changeBtnState(newValue);
    this._updateValue(newValue);
};

Spinbox.prototype._updateValue = function (newValue) {
    this.value = newValue;
    this.$valueInput.val(this.value);
};

Spinbox.prototype._validate = function (newValue) {
    return (newValue >= this.MIN_VALUE) && (newValue <= this.MAX_VALUE);
};

Spinbox.prototype._changeBtnState = function (newValue) {
    this.$minusBtn.prop('disabled', (newValue <= this.MIN_VALUE));
    this.$plusBtn.prop('disabled', (newValue >= this.MAX_VALUE));
};
