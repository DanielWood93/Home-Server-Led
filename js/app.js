       
var RGBChange = function() {
	$('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
};

var PrintChanged = function() {
    console.log('(R,G,B): (' + r.getValue()+', '+g.getValue()+', '+b.getValue()+')');
};

var r = $('#R').slider()
            .on('slide', RGBChange)
            .on('slide', PrintChanged)
            .data('slider');
var g = $('#G').slider()
            .on('slide', RGBChange)
            .on('slide', PrintChanged)
            .data('slider');
var b = $('#B').slider()
            .on('slide', RGBChange)
            .on('slide', PrintChanged)
            .data('slider');
        
   