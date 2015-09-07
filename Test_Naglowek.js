if (Meteor.isClient) {
  $(function() {
    $('.ui.sidebar').first().sidebar('attach events', '.sidebar.icon');
    $('.sidebar.icon').removeClass('disabled');
    $('.overlay').visibility({
      type: 'fixed',


    });
    $('.secondary.menu').visibility({
      once: false,

      onPassing: function(calculations) {
        var newColor = 'white' ;
        $(this).css('color', newColor);


        var newTrans = 'all 1s linear';
        $(this).css('transition', newTrans);



      },
    });



    $('.ui.sticky').sticky();
  })
};

