import java.io.File;
import java.io.FileNotFoundException;
import java.util.Locale;
import java.util.Scanner;
import java.util.TreeMap;

public class _09_ListOfProducts {
	@SuppressWarnings("resource")
	public static void main(String[] args) {
		Scanner scan = null;
		Locale.setDefault(Locale.US);
		TreeMap<Double, String> productList = new TreeMap<>();
		try {
			scan = new Scanner(new File("productList.txt"));
			while (scan.hasNext()) {
				String key = scan.next();
				double value = scan.nextDouble();
				productList.put(value,key);
			}
		} catch (FileNotFoundException e) {
			System.out.println("Error");
		}
		for (Double string : productList.keySet()) {
			System.out.println(string+" "+productList.get(string) );
		}
	}
}