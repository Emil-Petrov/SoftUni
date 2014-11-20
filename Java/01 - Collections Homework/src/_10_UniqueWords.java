import java.util.Scanner;
import java.util.TreeSet;


public class _10_UniqueWords {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
	
		//Get array of only words.
		String input = scan.nextLine().toLowerCase();
		String[] inArray = input.split("\\W+");
		
		TreeSet<String> words = new TreeSet<>();
		
		//Fill set with words Note: They wont repeat cuz set doesn't allow matching entries.
		for (int i = 0; i < inArray.length; i++) {
			if (inArray[i].equals("")) {
				continue;
			}
			words.add(inArray[i]);
		}
		System.out.println(words);
	}
}
