package com.trains.backend.projection;

import java.sql.Time;
import java.time.LocalDate;

public interface SpecificRoute {
    Long getRouteId();
    String getDepartureDay();
    LocalDate getDepartureDate();
    Time getDepartureTime();
    Time getArrivalTime();
    Integer getPrice();
}
