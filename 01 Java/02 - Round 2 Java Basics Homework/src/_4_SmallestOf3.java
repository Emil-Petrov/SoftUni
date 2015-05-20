import java.math.BigDecimal;
import java.util.Locale;
import java.util.Scanner;

public class _4_SmallestOf3 {
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner scan = new Scanner(System.in);
		BigDecimal min = new BigDecimal(Double.MAX_VALUE);
		for (int i = 0; i < 3; i++) {
			BigDecimal current = scan.nextBigDecimal();
			if (current.compareTo(min) < 0) {
				min = current;
			}
		}
		System.out.println(min.stripTrailingZeros());
	}
}