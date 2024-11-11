package com.trains.backend.projection;

import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;

public interface AllTrips {
    Long getReservationId();
    Timestamp getReservationDate();
    Long getRouteId();
    Time getDeparture();
    Time getArrival();
    Long getStartStationId();
    Long getEndStationId();
    Integer getSeatId();
    Date getDepartureDate();
    String getStatus();
}
