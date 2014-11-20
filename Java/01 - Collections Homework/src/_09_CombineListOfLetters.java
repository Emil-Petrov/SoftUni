import java.util.ArrayList;
import java.util.Scanner;

public class _09_CombineListOfLetters {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		char[] fArray = scan.nextLine().toCharArray();
		char[] sArray = scan.nextLine().toCharArray();
		ArrayList<Character> chars = new ArrayList<>();
		
		//Puts all chars from first array into list.
		for (int i = 0; i < fArray.length; i++) {
			
			//Skips empty/whitespace entries
			if (fArray[i] == ' ') {
				continue;
			}
			chars.add(fArray[i]);
		}
		
		//If list contains char or char is whitespace skip adding char to list.
		for (int i = 0; i < sArray.length; i++) {
			if (sArray[i]==' ' || chars.contains(sArray[i])) {
				continue;
			}
			chars.add(sArray[i]);
		}
		
		//Prints all entries from list.
		for (Character character : chars) {
			System.out.print(character+" ");
		}
	}
}
