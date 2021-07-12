
    $(function () {
        $('#picker[name="daterange"]').daterangepicker({
          opens: 'left',
          timePicker: 'false',
  
        }, function (start, end, label) {
          var s = start.format('YY-MM-DD');
          var e = end.format('YY-MM-DD');
          document.getElementById("from").innerHTML = s;
          document.getElementById("to").innerHTML = e;
          // clear();
  
        });
  
  
  
  
  
      });
      //     function clear(){
      // $('#clear-dates').css('display','block')
      //       $('#clear-dates').click( function () {
      //         $('#from').html('Add dates');
      //         $('#to').html('Add dates');
      //       });
  
      //      }
  
      $(function () {
        $('li.dropdown > a').on('click', function (event) {
          event.preventDefault();
          $(this).parent().find('ul').first().toggle(300);
          $(this).parent().find('ul').parent().mouseleave(function () {
            var child = $(this);
            $('html').click(function () {
              child.children(".dropdown-menu").hide();
              $('html').unbind('click');
            });
          });
        });
      });
      $(function () {
        $('nav>button').on('click', function (event) {
          event.preventDefault();
          $(this).parent().find('.second-menu').first().toggle(300);
          $(this).parent().find('.second-menu').parent().mouseleave(function () {
            var thisUI = $(this);
            $('html').click(function () {
              thisUI.children(".second-menu").hide();
              $('html').unbind('click');
            });
          });
        });
      });
      $(window).scroll(function () {
        if ($(window).width() > 772) {
          if ($(window).scrollTop() >= 50) {
            $('.container-f').addClass('fixed-header');
            $('.container-f').addClass('menu-bg');
            $('.logo>a').addClass('red');
            $('nav>div>a').hide('fast');
            $('nav>div>a').addClass('black');
            $('#currency').addClass('black');
            $('#bar').addClass('black');
            $('#language').addClass('black');
            $('nav button').show();
            $('.second-menu').hide('fast');
          }
          else {
            $('.container-f').removeClass('fixed-header');
            $('.container-f').removeClass('menu-bg');
            $('nav>div>a').show('fast');
            $('#bar').removeClass('black');
            $('#currency').removeClass('black');
            $('#language').removeClass('black');
            $('nav button').hide();
            $('.logo>a').removeClass('red');
            $('nav>div>a').removeClass('black');
            $('.second-menu').show();
          }
        }
  
      });
  
  
      $(document).ready(function () {
        $('.show').click(function () {
          $('.second-menu').show('slow');
          $('.show').hide('');
          $('nav>div>a').show('fast');
        });
        $("#focus").click(function (e) {
          $("input").trigger("focus");
          e.preventDefault();
        });
        $("a").click(function (e) {
          e.preventDefault();
        });
      });
      $('#carousel-1').carousel({
        interval: 4000,
        wrap: true,
        keyboard: true
      });
  
      /* 8 carousel example */
      $('#carousel-2').carousel({
        interval: 6000,
        wrap: true,
        keyboard: true
      });
  
      /* 9 carousel example */
      $('#carousel-3').carousel({
        interval: 8000,
        wrap: true,
        keyboard: true
      });
      $('#carousel-4').carousel({
        interval: 10000,
        wrap: true,
        keyboard: true
      });
   