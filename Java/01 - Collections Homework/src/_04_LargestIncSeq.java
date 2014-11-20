import java.util.Scanner;
import java.util.TreeMap;

public class _04_LargestIncSeq {
	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		String[] input = scan.nextLine().split(" ");
		String seq = input[0] + " ";

		TreeMap<Integer, String> storeInfo = new TreeMap<>();
		int mLength = 0; //Maximum length of seq.
		int cLength = 0; //Current length of seq.

		for (int i = 0; i < input.length - 1; i++) {
			String temp = seq; //Prevents adding wrong sequence to map if it's over since it resets.
			if (Integer.parseInt(input[i]) < Integer.parseInt(input[i + 1])) { //If seq continues add next value to it.
				seq += input[i + 1] + " ";
				temp = seq;
				cLength++;
				if (cLength > mLength) { //Find max length.
					mLength = cLength;
				}
			} else {
				System.out.println(seq);
				temp = seq;
				seq = input[i + 1] + " ";
			}
			if (i == input.length - 2) { //Print last sequence.
				System.out.println(seq);
			}
			if (!storeInfo.containsKey(cLength)) {//Stores largest sequence can reduce to 1 value but too lazy.
				storeInfo.put(cLength, temp);
			}
		}
		if (storeInfo.size() > 1) {//Prints largest sequence of 2 or more numbers.
			System.out
					.println("Longest: " + storeInfo.get(storeInfo.lastKey()));
		}
	}
}