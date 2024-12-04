package observer_pattern.implementations;

import observer_pattern.interfaces.DisplayElement;
import observer_pattern.interfaces.Observer;
import observer_pattern.interfaces.Subject;

public class ForecastDisplay implements Observer, DisplayElement {

    private float temprature;
    private float humidity;
    private float pressure;
    private Subject weatherdata;
    
    public ForecastDisplay(Subject weatherdata) {
        this.weatherdata = weatherdata;
        this.weatherdata.registerObserver(this);
    }

    public void update(float temp, float humidity, float pressure) {
        this.temprature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        display();
    }

    @Override
    public void display() {
        System.out.println(" current weather conditions: " + temprature + "F degrees and " + humidity + "% humidity" + pressure + "Kpa pressure" );
    }
    
}

