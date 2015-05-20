import java.util.Scanner;

public class _07_DaysBetweenDates {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String[] fDate = scan.next().split("-"); // First
		String[] sDate = scan.next().split("-"); // Second
		int fDays = getDays(fDate[2], fDate[1], fDate[0]);
		int sDays = getDays(sDate[2], sDate[1], sDate[0]);
		System.out.println(sDays - fDays);
	}

	private static int getDays(String Years, String Months, String Days) {
		int fYear = Integer.parseInt(Years);
		int fMonths = Integer.parseInt(Months);
		int fDays = 0;
		for (int i = 1900; i < fYear; i++) {
			if (i % 4 == 0)
				if (i % 100 == 0 && i % 400 != 0) {
				} else {
					fDays += 366;
				}
			else {
				fDays += 365;
			}
		}
		for (int i = 1; i < fMonths; i++) {
			if (i == 2) {
				if (fYear % 4 == 0) {
					if (fYear % 400 != 0 && fYear % 100 == 0) {
					} else {
						fDays += 29;
					}
				} else {
					fDays += 28;
				}
			} else if (i == 4 || i == 6 || i == 9 || i == 11) {
				fDays += 30;
			} else {
				fDays += 31;
			}
		}
		fDays += Integer.parseInt(Days);
		return fDays;
	}
}

// for (int i = 0; i < fDate.length; i++) {
// int current = Integer.parseInt(fDate[i]);
// if (i == 2) {
// if (i % 4 != 0 || (i % 100 == 0 && i % 400 == 0)) {
// sDays += 366;
// } else {
// sDays += 365;
// }
// }
// else if (i==1) {
// if (Integer.parseInt(fDate[i])==2) {
// sDays+=28;
// }
// else if (Integer.parseInt(fDate[i])==4||
// Integer.parseInt(fDate[i])==6||Integer.parseInt(fDate[i])==9||Integer.parseInt(fDate[i])==11)
// {
// sDays+=30;
// }
// else {
// sDays+=31;
// }
// }
// else {
// sDays+=Integer.parseInt(fDate[i]);
// }
// }
// for (int i = 0; i < sDate.length; i++) {
// int current = Integer.parseInt(sDate[i]);
// if (i == 2) {
// if (i % 4 != 0 || (i % 100 == 0 && i % 400 == 0)) {
// eDays += 366;
// } else {
// eDays += 365;
// }
// }
// else if (i==1) {
// if (Integer.parseInt(sDate[i])==2) {
// eDays+=28;
// }
// else if (Integer.parseInt(sDate[i])==4||
// Integer.parseInt(sDate[i])==6||Integer.parseInt(sDate[i])==9||Integer.parseInt(sDate[i])==11)
// {
// eDays+=30;
// }
// else {
// eDays+=31;
// }
// }
// else {
// eDays+=Integer.parseInt(sDate[i]);
// }
// }
// System.out.println(eDays - sDays);
