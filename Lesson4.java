public class Lesson4 {
    public static void main(String[] args) {
        System.out.println("Integer Value Range (" + Integer.MIN_VALUE + " to " + Integer.MAX_VALUE + ")");
        System.out.println("Byte Value Range (" + Byte.MIN_VALUE + " to " + Byte.MAX_VALUE + ")");
        System.out.println("Short Value Range (" + Short.MIN_VALUE + " to " + Short.MAX_VALUE + ")");
        long myLongValue = 100L;
        System.out.println("A long has a width of " + Long.SIZE);
        System.out.println("Long Value Range (" + Long.MIN_VALUE + " to " + Long.MAX_VALUE + ")");
        myLongValue = 100;
        System.out.println(myLongValue);
        long bigLongLiteralValue = 2_147_483_647_234L;
        System.out.println(bigLongLiteralValue);
        short bigShortLiteralValue = 32767;
        System.out.println(bigShortLiteralValue);

    }
}
