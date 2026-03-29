package strategy_pattern.behaviors;

import strategy_pattern.interfaces.QuackBehavior;

public class MuteQuack implements QuackBehavior{

    public void quack() {
        System.out.println("<< silence >>");
    }
    
}
