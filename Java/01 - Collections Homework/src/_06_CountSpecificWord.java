import java.util.Scanner;

public class _06_CountSpecificWord {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		// Task says sentence so i assume it's a single line of text.

		// Receive input and make all words lower case for better accuracy.
		String input = scan.nextLine().toLowerCase();

		// Split input to an array containing all words.
		String[] words = input.split("[^A-Za-z]+");

		// Receive word to look for and make it lower case too for same reason as above.
		String word = scan.next().toLowerCase();

		// Check whole array for a match and increase counter by 1 for each.
		int counter = 0;
		for (String string : words) {
			if (string.equals(word)) {
				counter++;
			}
		}
		System.out.println(counter);
	}
}
