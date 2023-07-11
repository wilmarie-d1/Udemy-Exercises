public class Lesson8 {

    public static void main(String[] args) {
        int myIntValue =5; float myFloatValue = 5f; double myDoubleValue = 5d;
        System.out.println(myIntValue);
        System.out.println(myFloatValue);
        System.out.println(myDoubleValue);

        myIntValue = 5 / 2;
        System.out.println(myIntValue);
        myFloatValue = 5f / 2f;
        System.out.println(myFloatValue);

        myDoubleValue = 5d / 2d;
        System.out.println(myDoubleValue);

        myIntValue = 5/3;
        System.out.println(myIntValue);

        myFloatValue = 5f / 3f;
        System.out.println(myFloatValue);

        myDoubleValue = 5d / 3d;
        System.out.println(myDoubleValue);

        myDoubleValue = 5.00 / 3.00;
        System.out.println(myDoubleValue);

        myDoubleValue = 5.00 / 3;
        System.out.println(myDoubleValue);

        double firstPounds = 100;
        double getKilograms = firstPounds * 0.453592237;

        System.out.println("The kilograms per pound is " + getKilograms);
        double pi = 3.1415927d;
        System.out.println(pi);

    }
}
