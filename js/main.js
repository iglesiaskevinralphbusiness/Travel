jQuery(function($) {'use strict',
	
	$(window).load(function(){'use strict',
		$portfolio_selectors = $('.exploreFilter >li>a');
		if($portfolio_selectors!='undefined'){
			$portfolio = $('.exploreItems');
			$portfolio.isotope({
				itemSelector : '.col-sm-3',
				layoutMode : 'fitRows'
			});
			
			$portfolio_selectors.on('click', function(){
				$portfolio_selectors.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$portfolio.isotope({ filter: selector });
				return false;
			});
		}
	});
	
	//Pretty Photo
	$("a[data-gallery^='prettyPhoto']").prettyPhoto({
	social_tools: false
	});
	$(".datePicker").datepicker();
});
