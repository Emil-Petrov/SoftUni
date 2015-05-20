import java.util.Scanner;

public class _02_SeqOfEqualString {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String input = scan.nextLine();
		String[] inArray = input.split(" ");
		for (int i = 0; i < inArray.length; i++) {
			// Prints every word.
			System.out.print(inArray[i] + " ");
			//Prevents out of bounds index
			if (i < inArray.length - 1) {
				//Prints new line if 2 different words are detected.
				if (!inArray[i].equals(inArray[i + 1])) {
					System.out.println();
				}
			}
		}
	}
}
