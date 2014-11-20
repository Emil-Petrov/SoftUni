import java.util.Arrays;
import java.util.Scanner;

public class _01_SortArray {
	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);

		// Get Array
		int n = scanner.nextInt();
		int[] numbers = new int[n];
		for (int i = 0; i < n; i++) {
			numbers[i] = scanner.nextInt();
		}
		// Sort array
		Arrays.sort(numbers);

		// Print Array
		for (int i = 0; i < numbers.length; i++) {
			System.out.print(numbers[i] + " ");
		}
	}
}
