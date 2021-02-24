module.exports = function(RED) {

    function getCredential(config) {
        RED.nodes.createNode(this,config);
            var node = this;
        node.on('input', function(msg) {
            msg.name= node.name;
            var username = this.credentials.username;
            var password = this.credentials.password;
            msg.payload = { "userName" : username, "password" : password }
            node.send(msg);
        });
    }
	
    RED.nodes.registerType("Login",getCredential,{
        credentials: {
            username: {type:"text"},
            password: {type:"password"}
        }
    });
    
}

