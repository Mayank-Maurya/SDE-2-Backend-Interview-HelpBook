package observer_pattern.implementations;

import java.util.ArrayList;
import java.util.List;

import observer_pattern.interfaces.Observer;
import observer_pattern.interfaces.Subject;

public class Weatherdata implements Subject {
    private List<Observer> observers;
    private float temprature;
    private float humidity;
    private float pressure;

    public Weatherdata() {
        observers = new ArrayList<>();
    }

    public void registerObserver(Observer o) {
        observers.add(o);
    }

    public void removeObserver(Observer o) {
        observers.remove(o);
    }

    public void notifyObservers() {
        for (Observer observer: observers) {
            observer.update(temprature, humidity, pressure);
        }
    }

    public void measurementsChanged() {
        notifyObservers();
    }

    // call this from outside or call it mannualy to notify
    public void setMeasurements(float temprature, float humidity, float pressure) {
        this.temprature = temprature;
        this.humidity = humidity;
        this.pressure = pressure;
        measurementsChanged();
    }
    
}
