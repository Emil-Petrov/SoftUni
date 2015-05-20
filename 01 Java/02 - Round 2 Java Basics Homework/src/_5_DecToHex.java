import java.util.Scanner;

public class _5_DecToHex {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String hex = Integer.toHexString(scan.nextInt());
		System.out.println(hex.toUpperCase());
	}
}
