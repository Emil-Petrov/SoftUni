import java.util.Arrays;
import java.util.Scanner;

public class _02_WordGen {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String chars = scan.next();
		String currentWord = "";
		char[] body = chars.toCharArray();
		Arrays.sort(body);
		for (int i = 0; i < body.length; i++) {
			for (int j = 0; j < body.length; j++) {
				for (int j2 = 0; j2 < body.length; j2++) {
					currentWord = body[i] + "" + body[j] + "" + body[j2];
					System.out.println(currentWord);
				}
			}
		}
	}
}