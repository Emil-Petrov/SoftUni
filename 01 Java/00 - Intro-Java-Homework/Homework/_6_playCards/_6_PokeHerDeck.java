package _6_playCards;

import java.io.FileOutputStream;
import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

public class _6_PokeHerDeck {
	public static final String Arial = "c:/windows/fonts/arialbd.ttf";

	public static void main(String[] args) {
		Document PlayCards = new Document();
		try {
			PdfWriter
					.getInstance(
							PlayCards,
							new FileOutputStream(
									"PokeHerDeck.pdf"));
		} catch (Exception e1) {
			e1.printStackTrace();
		}
		String[] Cards = { "A", "2", "3", "4", "5", "6", "7", "8", "9", "10",
				"J", "Q", "K" };
		char[] Suits = { '\u2660', '\u2665', '\u2663', '\u2666' };
		PdfPTable table = new PdfPTable(4);
		PdfPCell cell;
		for (int i = 0; i < Suits.length; i++) {
			PlayCards.open();
			try {
				PlayCards.add(new Paragraph());
			} catch (DocumentException e1) {
				e1.printStackTrace();
			}
			for (int j = 0; j < Cards.length; j++) {
				BaseFont bf;
				try {
					bf = BaseFont.createFont(Arial, BaseFont.IDENTITY_H,
							BaseFont.EMBEDDED);
					Font arial;
					if (Suits[i]=='\u2665' || Suits[i] == '\u2666') {
						arial = new Font(bf, 30, Font.BOLD, BaseColor.RED);
					}
					else {
						arial = new Font(bf, 30, Font.BOLD, BaseColor.BLACK);
					}
					cell = new PdfPCell(new Phrase(Cards[j] + Suits[i], arial));
					cell.setFixedHeight(120f);
					cell.setColspan(1);
					cell.setHorizontalAlignment(Element.ALIGN_CENTER);
					cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
					table.addCell(cell);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
		try {
			table.setWidths(new float []{50f,50f,50f,50f});
			PlayCards.add(table);
		} catch (DocumentException e) {
			e.printStackTrace();
		}
		PlayCards.close();
	}
}