package decorator_pattern;

import decorator_pattern.BeverageTypes.Espresso;
import decorator_pattern.condiments.Milk;
import decorator_pattern.condiments.Mocha;
import decorator_pattern.condiments.Whip;

public class StarBucksCoffeeCounter {
    public static void main(String[] args) {
        // simple beverage with no Condiments(toppings)
        Beverage beverage = new Espresso();

        // beverage with condinments( maybe multiple)
        Beverage beverage2 = new Mocha(beverage);
        beverage2 = new Milk(beverage2);
        beverage2 = new Whip(beverage2);

        System.out.println(" your " + beverage2.getDescription() + " is ready");
        System.out.println("total cost of your order is: " + beverage2.cost());


    }
}
