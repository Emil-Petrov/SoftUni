import java.util.Scanner;
import java.util.TreeMap;

public class _11_MostFrequentWord {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		String[] input = scan.nextLine().split("\\W+");

		TreeMap<String, Integer> words = new TreeMap<>();
		
		int maxValue = 0;

		for (int i = 0; i < input.length; i++) {
			if (input[i].equals("")) {
				continue;
			}
			int value = 1;

			// if word is already in map increase count by 1;
			if (words.containsKey(input[i].toLowerCase())) {
				value += words.get(input[i]);
			}
			// Get max count of words.
			if (value > maxValue) {
				maxValue = value;
			}
			// Put word + count;
			words.put(input[i].toLowerCase(), value);
		}

		for (String word : words.keySet()) {
			if (words.get(word) == maxValue) {
				System.out.println(word + " -> " + words.get(word) + " times");
			}
		}
	}
}
