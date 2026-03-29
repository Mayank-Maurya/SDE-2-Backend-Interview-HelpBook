package strategy_pattern.behaviors;

import strategy_pattern.interfaces.FlyBehavior;

public class FlyRocketPowered implements FlyBehavior {

    public void fly() {
        System.out.println(" I am flying with a rocket");
    }
    
}
