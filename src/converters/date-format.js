import moment from 'moment';

export class DateFormatValueConverter {
  toView(value) {
    return moment.utc(value).local().format('llll');
  }
}

export class DateAndTimeValueConverter{
    toView(value){
        
    try{
			return moment(value).format('l LT');
		}
		catch(e){
			return '';
		}
        
    }
}

export class DurationValueConverter{
    toView(value){
        
    try{
			var d = moment.duration(value);
			var h = Math.floor(d.asHours());
			var paddedHours = (h < 10) ? '0' + h: h;

			// add 1 second to account for processing less than a second doesn't show 0
			return paddedHours + moment.utc(value).add(1, 's').format(":mm:ss");
		}
		catch(e){
			return '';
		}
        
    }
}