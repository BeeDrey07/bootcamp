package book2.chapter2;

public class EnumTest {
    public enum CardSuit {HEARTS, SPADES, CLUBS, DIAMONDS}

    public static void main(String[] args) {
        CardSuit suit;
        suit = CardSuit.CLUBS;
        System.out.println("The suit is " + suit);
    }
}