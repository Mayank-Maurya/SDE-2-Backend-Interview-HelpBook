package decorator_pattern.BeverageTypes;

import decorator_pattern.Beverage;

public class HouseBlend extends Beverage {

    public HouseBlend() {
        description = "HouseBlend";
    }

    public double cost() {
        return 10;
    }
    
}
