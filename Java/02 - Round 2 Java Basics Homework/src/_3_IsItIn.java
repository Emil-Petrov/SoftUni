import java.util.Locale;
import java.util.Scanner;

public class _3_IsItIn {
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner scan = new Scanner(System.in);
		float A = scan.nextFloat();
		float B = scan.nextFloat();
		if ((A >= 12.5 && A <= 17.5 && B <= 13.5 && B >= 8.5)
				|| (A >= 12.5 && A <= 22.5 && B <= 8.5 && B >= 6)
				|| (A >= 20 && A <= 22.5 && B <= 13.5 && B >= 8.5)) {
			System.out.println("Inside");
		} else {
			System.out.println("Outside");
		}
	}
}