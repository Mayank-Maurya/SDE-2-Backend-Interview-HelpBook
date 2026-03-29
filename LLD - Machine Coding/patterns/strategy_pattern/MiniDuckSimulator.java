package strategy_pattern;

import strategy_pattern.DuckTypes.Duck;
import strategy_pattern.DuckTypes.MallardDuck;
import strategy_pattern.DuckTypes.ModelDuck;
import strategy_pattern.behaviors.FlyRocketPowered;

public class MiniDuckSimulator {
    public static void main(String[] args) {
        Duck mallard = new MallardDuck();
        mallard.performFly();
        mallard.performQuack();

        Duck model = new ModelDuck();
        model.performFly();
        model.SetFlyBehavior(new FlyRocketPowered());
        model.performFly();

    }
    
}
