package decorator_pattern.condiments;

import decorator_pattern.Beverage;
import decorator_pattern.decorator.CondimentDecorator;

public class Whip extends CondimentDecorator {

    public Whip(Beverage beverage) {
        this.beverage = beverage;
    }

    public String getDescription() {
        return beverage.getDescription() + ",Whip";
    }

    public double cost() {
        return beverage.cost() + 30;
    }
    
}
