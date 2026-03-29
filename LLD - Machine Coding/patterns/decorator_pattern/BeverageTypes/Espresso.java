package decorator_pattern.BeverageTypes;

import decorator_pattern.Beverage;

public class Espresso extends Beverage {

    public Espresso() {
        description = "Espresso";
    }

    public double cost() {
        return 20;
    }
    
}
