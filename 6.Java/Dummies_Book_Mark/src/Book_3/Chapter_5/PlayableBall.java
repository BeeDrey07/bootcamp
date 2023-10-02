package Book_3.Chapter_5;

interface ThrowableBall {
    void throwBall();

    void catchBall();

    default void throwHighBall() {

    }
}

interface KickableBall {
    void kickBall();

    void catchBall();
}

public interface PlayableBall
        extends ThrowableBall, KickableBall {
    void dropBall();
}