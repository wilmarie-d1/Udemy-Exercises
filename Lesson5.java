public class Lesson5 {

    public static void main(String[] args) {
        short myMinShortValue = Short.MIN_VALUE; int myMinIntValue = Integer.MIN_VALUE;
        System.out.println(myMinShortValue);
        System.out.println(myMinIntValue);
        byte myMinByteValue = Byte.MIN_VALUE, myMaxByteValue = Byte.MAX_VALUE;
        System.out.println(myMinByteValue);
        System.out.println(myMaxByteValue);
        short firstShort = 1; int firstInteger = 2;
        byte firstByte = 1, secondByte = 2;
        int myTotal = (myMinIntValue /2);
        System.out.println(myTotal);
        byte myNewByteValue =(byte) (myMinByteValue / 2);
        System.out.println(myNewByteValue);
        short myNewShortValue = (short) (myMinShortValue / 2);
        System.out.println(myNewShortValue);
    }
}
