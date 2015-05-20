import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;

import com.smartxls.WorkBook;

public class _11_Excel 
{
	public static void main(String[] args)
	{
		WorkBook workBook = new WorkBook();
		ArrayList<String> officeNames = new ArrayList<>();
		ArrayList<Float> officeIncomes = new ArrayList<>();
		try
		{
			FileInputStream fileStream = new FileInputStream(new File("3. Incomes-Report.xlsx"));
			workBook.readXLSX(fileStream);
			int sheetsCount = workBook.getNumSheets();
			for (int i = 0; i < sheetsCount; i++) 
			{
				workBook.setSheet(i);
				int rowsCount = workBook.getLastRow();
				for (int j = 1; j <= rowsCount; j++)
				{
					String tempName = workBook.getText(j,0);
					float tempIncome = Float.parseFloat(workBook.getText(j,3));
					if(officeNames.contains(tempName))
					{
						officeIncomes.set(officeNames.indexOf(tempName),officeIncomes.get(officeNames.indexOf(tempName)) + (tempIncome + tempIncome * 0.2f));
					}
					else
					{
						officeNames.add(tempName);
						officeIncomes.add(tempIncome + tempIncome * 0.2f);
					}
				}
			}
			for (int i = 0; i < officeNames.size(); i++) 
			{
				for (int j = 0; j < officeNames.size(); j++)
				{
					if(officeNames.get(i).compareTo(officeNames.get(j)) < 0)
					{
						String tempName = officeNames.get(i);
						officeNames.set(i, officeNames.get(j));
						officeNames.set(j, tempName);
						
						float tempIncome = officeIncomes.get(i);
						officeIncomes.set(i, officeIncomes.get(j));
						officeIncomes.set(j, tempIncome);
					}
				}
			}
			
			float totalIncome = 0f;
			for (int i = 0; i < officeNames.size(); i++)
			{
				System.out.printf("%s Total -> %.2f\n",officeNames.get(i),officeIncomes.get(i));
				totalIncome +=  officeIncomes.get(i);
			}
			System.out.printf("Grand Total -> %.2f",totalIncome);
		}
		catch(Exception e)
		{
			System.out.println("Error");
		}
	}
}
