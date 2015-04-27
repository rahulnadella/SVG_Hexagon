/* 
The svgColor function generates a random color for each SVG path 
(outline of a shape) will define a new color for a revolution of 7 seconds.
*/
var svgColor = function()
{
	/* Change the fill color of the shape (random) */
	$('#r1').css('color', randomColor());
	$('#r2').css('color', randomColor());
	$('#r3').css('color', randomColor());
	$('#r4').css('color', randomColor());
	$('#r5').css('color', randomColor());
	$('#r6').css('color', randomColor());
	/* Timer for 7 seconds */
	window.setTimeout(svgColor, 8000);
}
/* The svgColor function will randomily change the shape color fill */
svgColor();  