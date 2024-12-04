package strategy_pattern.behaviors;

import strategy_pattern.interfaces.QuackBehavior;

public class Squeak implements QuackBehavior {

    public void quack() {
        System.out.println("Squeak");
    }
    
}
