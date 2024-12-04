package observer_pattern.implementations;

import observer_pattern.interfaces.DisplayElement;
import observer_pattern.interfaces.Observer;
import observer_pattern.interfaces.Subject;

public class CurrentConditionDisplay implements Observer, DisplayElement {

    private float temprature;
    private float humidity;
    private Subject weatherdata;
    
    public CurrentConditionDisplay(Subject weatherdata) {
        this.weatherdata = weatherdata;
        this.weatherdata.registerObserver(this);
    }

    public void update(float temp, float humidity, float pressure) {
        this.temprature = temp;
        this.humidity = humidity;
        display();
    }

    @Override
    public void display() {
        System.out.println(" current weather conditions: " + temprature + "F degrees and " + humidity + "% humidity" );
    }
    
}
