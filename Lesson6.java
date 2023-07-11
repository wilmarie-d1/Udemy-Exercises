public class Lesson6 {

    public static void main(String[] args) {
        byte firstByte = 32;
        short firstShort = 100;
        int firstInt = 234954;
        long longMix = 50000L + (10 * (firstByte + firstShort + firstInt));
        System.out.println(longMix);
        short shortTotal = (short) (1000 + 10 * (firstByte + firstShort + firstInt));
        System.out.println(shortTotal);
    }
}
