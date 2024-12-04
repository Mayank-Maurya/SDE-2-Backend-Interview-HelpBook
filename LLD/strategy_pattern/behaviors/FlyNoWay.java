package strategy_pattern.behaviors;

import strategy_pattern.interfaces.FlyBehavior;

public class FlyNoWay implements FlyBehavior {

    public void fly() {
        System.out.println(" I can't Fly");
    }
    
}
