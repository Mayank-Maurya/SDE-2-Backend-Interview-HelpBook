package strategy_pattern.DuckTypes;

import strategy_pattern.interfaces.FlyBehavior;
import strategy_pattern.interfaces.QuackBehavior;

public abstract class Duck {
    FlyBehavior flyBehavior;
    QuackBehavior quackBehavior;

    public abstract void display();

    public void performFly() {
        flyBehavior.fly();
    }

    public void performQuack() {
        quackBehavior.quack();
    }

    public void swim() {
        System.out.println(" All ducks float, even decoys! :)))))");
    }

    public void SetFlyBehavior(FlyBehavior fb) {
        flyBehavior = fb;
    }

    public void SetQuackBehavior(QuackBehavior qb) {
        quackBehavior = qb;
    }

}