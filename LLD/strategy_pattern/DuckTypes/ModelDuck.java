package strategy_pattern.DuckTypes;

import strategy_pattern.behaviors.FlyNoWay;
import strategy_pattern.behaviors.Quack;

public class ModelDuck extends Duck {

    public ModelDuck() {
        flyBehavior = new FlyNoWay();
        quackBehavior = new Quack();
    }

    public void display() {
        System.out.println("I am model duck so saddd:)))))");
    }
    
}
