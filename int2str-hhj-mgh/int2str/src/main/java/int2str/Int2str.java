package int2str;

public class Int2str {

    public String int2Str(int number){

        if(number<0){
           throw new IllegalArgumentException("Error");
        }

        if(number == 0){
            return "0";
        }

        String result ="";
        int quota = number;

        while (quota>0){
            result = getLastNumberToStr(quota)+ result;
            quota = quota/10;
        }

        return result;
    }

    public String getLastNumberToStr(int number){

        int mod = number%10;

        return ""+mod;
    }


}


