package book2.chapter5;

public class ExpressionGanging {
    public static void main(String[] args) {
        System.out.println("We are go for launch in T minus ");
        for (int count = 10; count >= 0;
             System.out.println((count == 8) ? "Ignition sequence start!" :
                     count + "..."),
                     count--)
            ;
        System.out.println("All engines running!");
        System.out.println
                ("Liftoff! We have a liftoff!");
    }
}

