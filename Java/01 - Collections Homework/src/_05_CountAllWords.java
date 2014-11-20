import java.util.Scanner;

public class _05_CountAllWords {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		// Split by everything that doesn't contain a letter from a-z/A-Z.
		String[] input = scan.nextLine().split("[^A-Za-z]+");

		// If string starts with whitespace reduce counter by 1.
		int counter = input.length;
		if (input[0].equals("")) {
			counter--;
		}
		
		System.out.println(counter);
	}
}
