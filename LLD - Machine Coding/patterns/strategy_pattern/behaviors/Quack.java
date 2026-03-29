package strategy_pattern.behaviors;

import strategy_pattern.interfaces.QuackBehavior;

public class Quack implements QuackBehavior {

    public void quack() {
        System.out.println(" Quack");
    }
    
}
