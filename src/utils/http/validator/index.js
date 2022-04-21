const validatorError = function(msg){
    this.msg = msg
}
validatorError.prototype.getMsg = function(){
    return this.msg;
}
export default validatorError;
