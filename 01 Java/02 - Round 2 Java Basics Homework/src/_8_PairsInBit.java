import java.util.Scanner;

public class _8_PairsInBit {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String binary = Integer.toBinaryString(scan.nextInt());
		int counter = 0;
		for (int i = 0; i < binary.length() - 1; i++) {
			if ((binary.charAt(i) == '1' && binary.charAt(i + 1) == '1')
					|| (binary.charAt(i) == '0' && binary.charAt(i + 1) == '0')) {
				counter++;
			}
		}
		System.out.println(counter);
	}
}
