package com.trains.backend.projection;

import java.time.LocalDate;
import java.time.LocalTime;

public interface ScheduleView {
    Long getRouteId();
    String getDepartureDay();
    LocalDate getDepartureDate();
    LocalTime getDepartureTime();
    LocalTime getArrivalTime();
    String getStartStationName();
    String getEndStationName();
}
