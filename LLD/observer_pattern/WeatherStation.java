package observer_pattern;

import observer_pattern.implementations.CurrentConditionDisplay;
import observer_pattern.implementations.ForecastDisplay;
import observer_pattern.implementations.Weatherdata;
import observer_pattern.interfaces.Subject;

public class WeatherStation {
    public static void main(String[] args) {

        Subject weatherdata = new Weatherdata();

        CurrentConditionDisplay currentConditionDisplay = new CurrentConditionDisplay(weatherdata);
        ForecastDisplay forecastDisplay = new ForecastDisplay(weatherdata);

        weatherdata.setMeasurements(1, 1, 1);
        weatherdata.setMeasurements(3, 3, 3);
        weatherdata.setMeasurements(5, 5, 5);

        weatherdata.removeObserver(currentConditionDisplay);

        weatherdata.setMeasurements(1, 1, 1);

        weatherdata.registerObserver(currentConditionDisplay);

        weatherdata.setMeasurements(1, 1, 1);

    }
}
