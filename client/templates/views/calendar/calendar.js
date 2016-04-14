

Template.calendar.onCreated(function(){
	this.subscribe('allFixtures', {
		onReady: function () {
			
			var calendar_fixtures = [];
			var tsStart, tsEnd;
			var fixtures = Fixtures.find().fetch();

			fixtures.forEach(function (fixture){
		
				tsStart = new Date(fixture.ts);		
				tsEnd = new Date(fixture.ts);
				tsEnd.setHours(tsStart.getHours()+2); // set fixture end date 2h later 

				calendar_fixtures.push({
					id: fixture._id,
					title: fixture.home_team + " vs " + fixture.away_team,
					start: tsStart,
					end: tsEnd,
					allDay: false,
					url: "fixtures/" + fixture._id
				});
		
			}); // end of for


		    // Initialize the calendar

			$('#calendar').fullCalendar({
				header: {
				    left: 'prev,next today',
				    center: 'title',
				    right: 'month,agendaWeek,agendaDay'
				},
				allDayDefault: false,
				views: {
					agendaWeek: {
						allDaySlot: false,
						slotLabelFormat: 'HH:mm',
						titleFormat: 'D MMMM YYYY',
						columnFormat: 'ddd D.MM'
					},
					agendaDay: {
						allDaySlot: false,
						slotLabelFormat: 'HH:mm',
						titleFormat: 'D MMMM YYYY'
					}
				},
				editable: false,
				droppable: false, // this allows things to be dropped onto the calendar
				events: calendar_fixtures,
				minTime: '12:00:00',
				aspectRatio: 'auto', // ratio of width-to-height - larger numbers make smaller heights
				timeFormat: 'HH:mm', // uppercase H for 24-hour clock
				timezone: 'local',
		 		defaultDate: calendar_fixtures[0].start,
				monthNames: [
						TAPi18n.__('month_jan'),
						TAPi18n.__('month_feb'),
						TAPi18n.__('month_mar'),
						TAPi18n.__('month_apr'),
						TAPi18n.__('month_may'),
						TAPi18n.__('month_jun'),
						TAPi18n.__('month_jul'),
						TAPi18n.__('month_aug'),
						TAPi18n.__('month_sep'),
						TAPi18n.__('month_oct'),
						TAPi18n.__('month_nov'),
						TAPi18n.__('month_dec')
					], 
		   		monthNamesShort: [
						TAPi18n.__('month_jan_s'),
						TAPi18n.__('month_feb_s'),
						TAPi18n.__('month_mar_s'),
						TAPi18n.__('month_apr_s'),
						TAPi18n.__('month_may_s'),
						TAPi18n.__('month_jun_s'),
						TAPi18n.__('month_jul_s'),
						TAPi18n.__('month_aug_s'),
						TAPi18n.__('month_sep_s'),
						TAPi18n.__('month_oct_s'),
						TAPi18n.__('month_nov_s'),
						TAPi18n.__('month_dec_s')
					], 
		   		dayNames: [
						TAPi18n.__('day_mon'),
						TAPi18n.__('day_tue'),
						TAPi18n.__('day_wed'),
						TAPi18n.__('day_thu'),
						TAPi18n.__('day_fri'),
						TAPi18n.__('day_sat'),
						TAPi18n.__('day_sun')
					], 
		   		dayNamesShort: [
						TAPi18n.__('day_mon_s'),
						TAPi18n.__('day_tue_s'),
						TAPi18n.__('day_wed_s'),
						TAPi18n.__('day_thu_s'),
						TAPi18n.__('day_fri_s'),
						TAPi18n.__('day_sat_s'),
						TAPi18n.__('day_sun_s')
					],
				buttonText: {
					today: TAPi18n.__('today'),
					month: TAPi18n.__('month'),
					week: TAPi18n.__('week'),
					day: TAPi18n.__('day')
				   }
			});
			
		}
	});	
});

Template.calendar.onRendered(function(){

	// Initialize i-check plugin
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green'
    });

    // Initialize the external events
    $('#external-events div.external-event').each(function() {

        // store data so the calendar knows to render an event upon drop
        $(this).data('event', {
            title: $.trim($(this).text()), // use the element's text as the event title
            stick: true // maintain when user navigates (see docs on the renderEvent method)
        });

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 1111999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });

    });
});

Template.calendar.helpers({
	getTitle: function () {
		return TAPi18n.__('calendar');
	},
	getDescription: function () {
    	return TAPi18n.__('calendar_description');
  	},
	getCategory: function () {
    	return TAPi18n.__('calendar_category');
  	}
});
