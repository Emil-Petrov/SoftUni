import java.util.Scanner;
import java.util.TreeMap;

public class _03_LargestSeq {
	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);
		String[] input = scan.nextLine().split(" ");

		TreeMap<Integer, String> output = new TreeMap<>();
		int maxValue = 1;
		int cValue = 1;

		for (int i = 0; i < input.length - 1; i++) {
			if (input[i].equals(input[i + 1])) {
				// Increase value if sequence should continue.
				cValue++; 
				 // Change max value if we have a new max.
				if (cValue > maxValue) {
					maxValue = cValue;
					 // Add new max to map.
					output.put(maxValue, input[i]);
				}

			} else {
				// Reset value if sequence is broken.
				cValue = 1;
			}
		}
		for (int i = 0; i < output.lastKey(); i++) {
			// Print end entry of  treeMap for "Key" amount of times.
			System.out.print(output.get(output.lastKey()) + " ");
		}
	}
}