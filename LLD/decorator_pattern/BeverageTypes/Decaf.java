package decorator_pattern.BeverageTypes;

import decorator_pattern.Beverage;

public class Decaf extends Beverage {

    public Decaf() {
        description = "Decaf";
    }
    public double cost() {
        return 30;
    }
    
}
