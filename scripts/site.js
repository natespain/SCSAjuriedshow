$(document).ready(function() {

        // Fancy Box
        $("[data-fancybox]").fancybox({
            buttons : [
                'close'
            ]
        });

        // Sticky Nav using Waypoints
        $(function() {
          var sticky = new Waypoint.Sticky({
            element: $('nav')[0]
          })
        });

        // Lazy Load
        // $(function() {
        //   $('.lazy').Lazy();
        // });


 });
