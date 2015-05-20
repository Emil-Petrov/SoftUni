import java.util.LinkedHashMap;
import java.util.Scanner;

public class _12_CardFreq {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		String[] input = scan.nextLine().split("[^a-zA-Z0-9]+");

		LinkedHashMap<String, Integer> cards = new LinkedHashMap<>();
		for (int i = 0; i < input.length; i++) {
			if (input[i].equals("")) {
				continue;
			}
			if (cards.containsKey(input[i])) {
				int temp = cards.get(input[i])+1;
				cards.put(input[i], temp);
			}
			else {
				cards.put(input[i], 1);
			}
		}
		for (String string : cards.keySet()) {
			double perCent =(double) cards.get(string)*(100.0/(double)input.length);
			System.out.printf("%s -> %.2f",string,perCent);
			System.out.print("%");//How to escape this in the above print?
			System.out.println();
		}
	}
}
