import java.util.Locale;
import java.util.Scanner;

public class _6_FormatNum {
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner scan = new Scanner(System.in);
		int fNum = scan.nextInt();
		float sNum = scan.nextFloat();
		float tNum = scan.nextFloat();
		System.out.printf("|%-10x|%010d|%10.2f|%-10.3f|", fNum,
				Integer.parseInt(Integer.toBinaryString(fNum)), sNum, tNum);
	}
}
