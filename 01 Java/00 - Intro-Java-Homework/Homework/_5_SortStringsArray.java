import java.util.Arrays;
import java.util.Scanner;

// No more formating... {{{{{{{{
public class _5_SortStringsArray {
	public static void main(String[] args) {
		Scanner Ammo = new Scanner(System.in);
		int arraySize = Ammo.nextInt();
		String[] sortThis = new String[arraySize];
		for (int i = 0; i < arraySize; i++) {
			Scanner value = new Scanner(System.in);
			sortThis[i] = value.next();
		}
		Arrays.sort(sortThis);
		for (int i = 0; i < sortThis.length; i++) {
			System.out.println(sortThis[i]);
		}
	}
}
