package decorator_pattern.decorator;

import decorator_pattern.Beverage;

public abstract class CondimentDecorator extends Beverage {
    public Beverage beverage;

    public abstract String getDescription();
}