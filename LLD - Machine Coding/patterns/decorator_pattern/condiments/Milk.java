package decorator_pattern.condiments;

import decorator_pattern.Beverage;
import decorator_pattern.decorator.CondimentDecorator;

public class Milk extends CondimentDecorator {

    public Milk(Beverage beverage) {
        this.beverage = beverage;
    }

    public String getDescription() {
        return beverage.getDescription() + ",Milk";
    }

    @Override
    public double cost() {
        return beverage.cost() + 10;
    }
    
}
