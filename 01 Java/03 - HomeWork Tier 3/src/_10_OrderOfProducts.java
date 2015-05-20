
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Scanner;

public class _10_OrderOfProducts {

	class Product {
		public String name;
		public double price;
	}

	public static void main(String[] args) {
		ArrayList<String> products = new ArrayList<>();
		ArrayList<Double> orders = new ArrayList<>();
		ArrayList<Double> prices = new ArrayList<>();

		Scanner scan;
		try {
			scan = new Scanner(new File("Products.txt"));
			while (scan.hasNextLine()) {
				String[] temp = scan.nextLine().split(" ");
				products.add(temp[0]);
				prices.add(Double.parseDouble(temp[1]));
				orders.add((double) 0);
			}

			scan = new Scanner(new File("Order.txt"));
			while (scan.hasNextLine()) {
				String[] temp = scan.nextLine().split(" ");
				orders.set(
						products.indexOf(temp[1]),
						orders.get(products.indexOf(temp[1]))
								+ Double.parseDouble(temp[0]));
			}
			scan.close();
		}catch (FileNotFoundException e) {
			System.out.println("Error");
		}
		double sum = 0;
		for (int i = 0; i < products.size(); i++) {
			sum += orders.get(i) * prices.get(i);
		}
		PrintWriter writer;
		try {
			writer = new PrintWriter(new File("Output.txt"));
			writer.printf("%.4f", sum);
			writer.close();
		} catch (FileNotFoundException e) {
			System.out.println("Error");
		}

	}
}
