$('li.lang-switch a').addClass('btn--language');
$('.checkbox input.input-checkbox').each(function() {
	if($(this).is(':checked')) {
	    $(this).parent().addClass('active');
    }
});
$('.parent.checkbox > label > .input-checkbox').on('click', function(e) {
      $(this).parents('.checkbox.parent').find('.input-checkbox').prop('checked',$(this).prop('checked'));
      $(this).parents('.checkbox.parent').find(' > .checkbox > label.subitem').toggleClass('active');
      return true;
  });

$(".sidebar-left").appendTo("#search-facets");
var childrenTest = $('blockquote.search-curator-message:empty').children().length
if (childrenTest == 0) {
	$('blockquote.search-curator-message').hide();
}

$(document).ready(function(){
  $('.btn-video .pause').on('click', function() {
    $('.video video').get(0).pause();
    $(this).hide();
    $('.btn-video .play').show();
  });
  $('.btn-video .play').on('click', function() {
    $('.video video').get(0).play();
    $(this).hide();
    $('.btn-video .pause').show();
  });
});

$( document ).ready(function() {
  
    if($(".cookie-notice").is(":hidden")){
        $('.emergencynotice').addClass('no-cookie-alert');
    } 
    $('.cookie-notice a.accept-link').on('click', function(){
        $('.emergencynotice').addClass('no-cookie-alert');
    });
	var childrenTest = $('blockquote.search-curator-message:empty').children().length
	if (childrenTest == 0) {
		$('blockquote.search-curator-message').hide();
	}
    $('.search-result-default .card-text p').each(function() {
      var origStr = $(this).text();
      var newStr = origStr.replace(/\&/g, '& ');
	  var finalStr = newStr.replace(/\amp;/g, ' ');
      $(this).text(finalStr);
    });

    $('.list-group-item .item-label:contains(Uncertain)').text('Date Unknown');
    $('.facets-applied .btn.btn-xs.btn-info:contains(Uncertain)').html('<small class="glyphicon glyphicon-remove"></small><small class="hidden">❌</small> Date Unknown');
    $('.list-group-item.selected-single_drill_down .item-label:contains(Date Unknown)').html('<small class="glyphicon glyphicon-remove"></small><small class="hidden">❌</small> Date Unknown');
	$('body.funnelback a[target="_blank"]').removeAttr('target');


    if($('.back-to-courses').length) {
        var queryOptions = window.location.search;
        $('a.back-to-courses').each(function(){
            $(this).attr('href', $(this).attr('href') + queryOptions);
            if((queryOptions == '?') || (queryOptions == '')){
            	$('a.back-to-courses').hide();
			} else {
				$('a.back-to-courses').show();
            }
        });
    }
    var currentPath = window.location.pathname;

    $('.main-nav__list.main-nav--main ul').each(function() {
      var targetPath = $(this).find('li').first().find('a').attr('href');
      if (targetPath == currentPath) {
        $(this).find('li').first().find('a').wrap('<span class="currentbranch0"></span>')
      }
    });
    $('.funnelback a[href*="dummy-url"]').each(function() {
        $(this).hide();
    });
  
    
});



function addChecks() {
  $('.checkbox input.input-checkbox').each(function() {
	if($(this).is(':checked')) {
	  $(this).parent().addClass('active');
    }
  });
}


function cityCentre() {
  $('.parent.checkbox > label > .input-checkbox').on('click', function(e) {
      $(this).parents('.checkbox.parent').find('.input-checkbox').prop('checked',$(this).prop('checked'));
      $(this).parents('.checkbox.parent').find(' > .checkbox > label.subitem').toggleClass('active');
      return true;
  });
  $('.parent.checkbox > div input.input-checkbox').on('click', function(e) {
      if ($(this).prop('checked') === false) {
          $(this).parents('.checkbox.parent').find(' > label > input.input-checkbox').prop('checked',false);
      }
      return true;
  });
  $('.search-results input[value="city centre"]').parent('label').hide();
  $('.location-text').each(function(){
      var origText = $(this).text();
      var newText = origText.replace('City Centre: ','');
      $(this).text(newText);
  });
  $('.location-text').each(function(){
      var origText = $(this).text();
      var newText = origText.replace('City Centre: ','');
      $(this).text(newText);
  });
  $('.location-text').each(function(){
      var origText = $(this).text();
      var newText = origText.replace('City Centre: ','');
      $(this).text(newText);
  });
  $('.location-event-text').each(function(){
      var origText = $(this).html();
      var newText = origText.replace('City Centre: ','');
      $(this).html(newText);
  });
  $('.location-event-text-full').each(function(){
      var origText = $(this).html();
      var newText = origText.replace('City Centre, ','');
      $(this).html(newText);
  });
}
function appendURLs() {
    if($('.search-results__sidebar').length) {
      $('#hidden-main-form').val($('#search-text').val());
      var queries = '?' + $('#searchoptions form').serialize();
      $('.course-list-grid__item a').each(function(){
          $(this).attr('href', $(this).attr('href') + queries);
      });
  }
}
cityCentre();
addChecks();
appendURLs();
document.addEventListener('after-ajax', addChecks);
document.addEventListener('after-ajax', cityCentre);
document.addEventListener('after-ajax', appendURLs);
