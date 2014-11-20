import java.util.Scanner;

public class _07_CountSubStringOccurence {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		//Get sentence and word to look for. Make them all lower case for accuracy and put the text into an array of words.
		String text = scan.nextLine().toLowerCase();
		String charSeq = scan.next().toLowerCase();
		String[] words = text.split("[^A-Za-z]+");
		
		int counter = 0;
		for (int i = 0; i < words.length; i++) {
			
			//Get size of word to look for and size of current word searching in.
			int searchSize = charSeq.length();
			int wordSize=words[i].length();
			
			for (int j = 0; j <= wordSize-searchSize; j++) {
				
				//Make a new string from the word we're looking in with size of the word we're looking for
				String temp = words[i].substring(j, j + searchSize);
				
				//If they match add +1 to counter;
				if (temp.equals(charSeq)) {
					counter++;
				}
			}
		}
		System.out.println(counter);
	}
}
