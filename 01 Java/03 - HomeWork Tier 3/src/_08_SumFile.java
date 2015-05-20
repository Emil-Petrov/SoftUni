import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class _08_SumFile {
	public static void main(String[] args) {
		Scanner scan = null;
		int sum = 0;
		try {
			scan = new Scanner(new File("src/numbers.txt"));
			while (scan.hasNextInt()) {
				sum +=scan.nextInt();
			}
			System.out.println(sum);
		} catch (FileNotFoundException e) {
			System.out.println("Error");
		}
	}
}