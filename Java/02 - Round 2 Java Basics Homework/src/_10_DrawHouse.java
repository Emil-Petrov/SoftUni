///
/// Not working will try to update b4 due time.
///
import org.jfree.graphics2d.svg.SVGGraphics2D;

public class _10_DrawHouse {
	public static void main(String[] args) {
		SVGGraphics2D plane = new SVGGraphics2D(648, 648);
		plane.drawLine(125, 135, 175,135);
		plane.drawLine(175, 135, 175, 85);
		plane.drawLine(175, 85, 125, 85);
		plane.drawLine(125, 85, 125, 135);
		plane.drawRect(2, 2, 9, 5);
		System.out.println( plane); 
	}
}
