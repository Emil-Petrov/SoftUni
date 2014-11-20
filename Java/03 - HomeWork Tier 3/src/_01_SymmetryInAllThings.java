import java.util.Scanner;

public class _01_SymmetryInAllThings {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String fNum = scan.next();
		String sNum = scan.next();
		String compare = "";
		for (int i = Integer.parseInt(fNum); i <= Integer.parseInt(sNum); i++) {
			compare = Integer.toString(i);
			if (compare.length() < 3) {
				if (compare.length() == 2
						&& compare.charAt(0) == compare.charAt(1)) {
					System.out.println(i);
				} else if (compare.length() == 1) {
					System.out.println(i);
				}
			} else {
				for (int j = 0; j < compare.length() / 2; j++) {
					if (compare.charAt(j) == compare.charAt(compare.length()
							- j - 1)) {
						System.out.println(i);
					}
				}
			}
		}
	}
}