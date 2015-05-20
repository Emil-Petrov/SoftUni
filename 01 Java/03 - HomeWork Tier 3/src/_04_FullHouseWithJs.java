public class _04_FullHouseWithJs { //20 min lefts to submit homework no time to finish
	public static void main(String[] args) {
		String[] cards = { "2", "3", "4", "5", "6", "7", "8", "9", "10", "J",
				"Q", "K", "A" };
		char[] suits = { '\u2660', '\u2665', '\u2663', '\u2666', '*' };
		int counter = 0;
		for (int i = 0; i < cards.length; i++) {
			for (int j = 0; j < cards.length; j++) {
				for (int j2 = 0; j2 < suits.length; j2++) { // 1
					for (int k = 0; k < suits.length; k++) { // 2
						for (int k2 = 0; k2 < suits.length; k2++) { // 3
							for (int l = 0; l < suits.length; l++) { // 4
								for (int l2 = 0; l2 < suits.length; l2++) { // 5
									counter += isJoker(i, j2, i, k, i, k2, j,
											l, j, l2, cards, suits);
								}
							}
						}
					}
				}
			}
		}
		System.out.println(counter);
	}

	private static int isJoker(int i, int j2, int i2, int k, int i3, int k2,
			int j, int l, int j3, int l2, String[] cards, char[] suits) {
		if (i != j) {
			if (j2 == 4) {
				System.out.print('*');
			} else {
				System.out.print(cards[i] + suits[j2]);
			}
			if (k == 4 || (j2 == k)) {
				System.out.print('*');
			} else {
				System.out.print(cards[i] + suits[k]);
			}
			if (k2 == 4 || (k == k2)) {
				System.out.print('*');
			} else {
				System.out.print(cards[i] + suits[k2]);
			}
			if (l == 4) {
				System.out.print('*');
			} else {
				System.out.print(cards[j] + suits[l]);
			}
			if (l2 == 4 || (l2 == l)) {
				System.out.print('*');
			} else {
				System.out.print(cards[j] + suits[l2]);
			}
			System.out.println();
			return 1;
		}
		return 0;
	}
}