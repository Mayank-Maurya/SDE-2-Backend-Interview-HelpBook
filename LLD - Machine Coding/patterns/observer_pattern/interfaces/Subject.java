package observer_pattern.interfaces;

public interface Subject {
    public void registerObserver(Observer o);
    public void removeObserver(Observer o);
    public void notifyObservers();
    public void setMeasurements(float temp, float humidity, float pressure);
}
