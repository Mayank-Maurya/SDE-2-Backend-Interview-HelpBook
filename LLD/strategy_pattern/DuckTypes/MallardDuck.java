package strategy_pattern.DuckTypes;

import strategy_pattern.behaviors.FlyWithWings;
import strategy_pattern.behaviors.Quack;

public class MallardDuck extends Duck{

    public MallardDuck() {
        flyBehavior = new FlyWithWings();
        quackBehavior = new Quack();
    }

    public void display() {
        System.out.println(" I am real Mallard Duck");
    }
    
}
