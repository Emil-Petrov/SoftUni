import java.util.Scanner;

public class _2_TriangleArea {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int ax, ay, bx, by, cx, cy;
		ax = scan.nextInt();
		ay = scan.nextInt();
		bx = scan.nextInt();
		by = scan.nextInt();
		cx = scan.nextInt();
		cy = scan.nextInt();
		System.out.println(Math.abs(ax * (by - cy) + bx * (cy - ay) + cx
				* (ay - by)));
	}
}
