public class
Lesson2 {
    public static void main(String[] args) {
        int myValue = 1000;
        int myMinIntValue = Integer.MIN_VALUE;
        System.out.println(myMinIntValue);
        int myMaxIntValue = Integer.MAX_VALUE;
        System.out.println(myMaxIntValue);
        System.out.println("Integer Minimum Value = " + myMinIntValue);
        System.out.println("Integer Minimum Value = " + Integer.MIN_VALUE);
        System.out.println("Integer Value Range (" + Integer.MIN_VALUE + " to " + Integer.MAX_VALUE + ")");
        System.out.println("Integer Value Range (" + Integer.MIN_VALUE + " to " + Integer.MAX_VALUE + ")");
        System.out.println("Busted Max value = " + (myMaxIntValue + 1));
        System.out.println("Busted Min value = " + (myMinIntValue - 1));
        System.out.println("Integer Max Value = " + Integer.MAX_VALUE);
//        int myMaxIntTest = 2147483648;
        int willThisCompile = (Integer.MAX_VALUE + 1);
        int willThisCompile2 = (214748346 + 1);
    }
}
