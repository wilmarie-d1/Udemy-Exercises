public class Lesson7 {

    public static void main(String[] args) {
        System.out.println("Float Value Range(" + Float.MIN_VALUE + " to " + Float.MAX_VALUE + ")");
        System.out.println("Double Value Range(" + Double.MIN_VALUE + " to " + Double.MAX_VALUE + ")");
        int myIntValue = 5; float myFloatValue = 5; double myDoubleValue = 5;
        System.out.println(myIntValue);
        System.out.println(myFloatValue);
        System.out.println(myDoubleValue);
        myFloatValue = 5f;
        myDoubleValue = 5d;
        System.out.println(myFloatValue);
        System.out.println(myDoubleValue);
        float myOtherFloatValue = (float)5.25;
        System.out.println(myOtherFloatValue);
    }
}
