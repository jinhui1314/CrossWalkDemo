/**
 * Created by Ryan on 16/6/2.
 */
(function($win) {

    $win.gxbapp.filter("startFrom",function(){

        return function (input, start){

            if (!input){

                return
            }
            //console.log(input)
            return input.slice(start);

        }
    })

    $win.gxbapp.directive("errSrc", function() {
        return {
            link: function(scope, element, attrs) {
                element.bind("error", function() {
                    if (attrs.src != attrs.errSrc) {
                        attrs.$set("src", attrs.errSrc);
                    }
                });
            }
        }
    });

})(window);
