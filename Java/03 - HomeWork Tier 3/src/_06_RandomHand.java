//TODO Check if Cards Repeat
import java.io.WriteAbortedException;
import java.util.Random;
import java.util.Scanner;

public class _06_RandomHand {
	public static void main(String[] args) {
		Random rnd = new Random();
		Scanner scan = new Scanner(System.in);
		String[] cards = { "2", "3", "4", "5", "6", "7", "8", "9", "10", "J",
				"Q", "K", "A" };
		char[] suits = { '\u2660', '\u2665', '\u2663', '\u2666' };
		int counter = 0;
		int duration = scan.nextInt();
		while (counter < duration) {
			boolean write = true;
			int rC1 = rnd.nextInt(11);
			int rC2 = rnd.nextInt(11);
			int rC3 = rnd.nextInt(11);
			int rC4 = rnd.nextInt(11);
			int rC5 = rnd.nextInt(11);
			int rS2 = rnd.nextInt(3);
			int rS3 = rnd.nextInt(3);
			int rS4 = rnd.nextInt(3);
			int rS1 = rnd.nextInt(3);
			int rS5 = rnd.nextInt(3);
			int[] rCcheck = { rC1, rC2, rC3, rC4, rC5 };
			int[] rScheck = { rS1, rS2, rS3, rS4, rS5 };
			for (int i = 0; i < rCcheck.length-1; i++) {
				for (int j = i+1; j < rScheck.length; j++) {
					if (rCcheck[i] == rCcheck[j] && rScheck[i] == rScheck[j]) {
						write=false;
					}
				}
			}
			if (write) {
				System.out.println(cards[rC1] + suits[rS1] + cards[rC2]
						+ suits[rS2] + cards[rC3] + suits[rS3] + cards[rC4]
						+ suits[rS4] + cards[rC5] + suits[rS5]);
				counter++;
			}
		}
	}
}