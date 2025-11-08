var User = (
    function() {
        var userId = "";

        var getId = function(){
            return userId;
        };

        var setId = function(userLoginId){
            userId = userLoginId;
        };

        return {
            getId: getId,
            setId: setId
        }
    }
)();

export default User;