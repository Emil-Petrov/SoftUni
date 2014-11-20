import java.util.Locale;
import java.util.Scanner;

public class _05_AnglesToRadians {
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		boolean print = false;
		for (int i = 0; i < n; i++) {
			double measure = scan.nextDouble();
			double result = 0;
			String type = scan.next();
			if (type.equals("deg")) {
				type="rad";
				result = (measure * Math.PI) / 180;
				print = true;
			} else if (type.equals("rad")) {
				type="deg";
				result = (measure * 180) / Math.PI;
				print=true;
			}
			if (print) {
				System.out.printf("%.6f %s%n",result,type);
			}
		}
	}
}
