
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


public class FechasDePrueba{
    public static void main (String args){
        LocalDateTime localdatetime = LocalDateTime.now();
        system.out.println(localdatetime);
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("MMMM dd, YYYY h:mm a");
        system.out.println(dtf);

    }
}

//----------------------------------------------------------------------

public String parseDateAs(String formattedDate, String currentFormat, String desiredFormat) {
    Date date;
    try {
        date = new SimpleDateFormat(currentFormat).parse(formattedDate);
    } catch (Exception exTz) {
        exTz.printStackTrace();
        date = new Date();
    }
    return new SimpleDateFormat(desiredFormat).format(date);
}

//---------------------------------------------------------------------------

private String getDate(String date)  {
    String value = Utils.assign(date);
    return dateUtils.parseDateAs(value, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", "dd MMM, yyyy");
}

//----------------------------------------------------------------------------