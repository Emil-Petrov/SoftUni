import java.util.Scanner;

public class _9_InDaHouse {
	public static void main(String[] args) {
		// (ax*(by-cy)+bx*(cy-ay)+cx*(ay-by)
		Scanner scan = new Scanner(System.in);
		float x, y;
		x = scan.nextFloat();
		y = scan.nextFloat();
		double roofArea = Math.abs(12.5 * (8.5 - 3.5) + 12.5 * (3.5 - 8.5)
				+ 13.5 * (8.5 - 8.5));
		double roofArea1 = Math.abs(x * (8.5 - 3.5) + 12.5 * (3.5 - y) + 13.5
				* (y - 8.5));
		double roofArea2 = Math.abs(12.5 * (y - 3.5) + x * (3.5 - 8.5) + 13.5
				* (8.5 - y));
		double roofArea3 = Math.abs(12.5 * (8.5 - y) + 12.5 * (y - 8.5) + x
				* (8.5 - 8.5));
		if ((x >= 12.5 && x <= 17.5 && y >= 8.5 && y <= 13.5)
				|| (x >= 22.5 && x <= 20 && y >= 8.5 && y <= 13.5)
				|| (roofArea1 + roofArea2 + roofArea3 == roofArea)) {
			System.out.println("Inside");
		} else {
			System.out.println("Outside");
		}
	}
}