import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class _2_Time 
{
	public static void main(String[] args) 
	{
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
		String timeString = formatter.format(LocalDateTime.now());
		System.out.println(timeString);
	}
}
