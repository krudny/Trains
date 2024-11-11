package com.trains.backend.repository;

import com.trains.backend.model.Route;
import com.trains.backend.projection.ScheduleView;
import com.trains.backend.projection.SpecificRoute;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface RouteRepository extends JpaRepository<Route, Long> {
    @Query(value = """
    SELECT 
        route_id as routeId, 
        departure_day as departureDay, 
        departure_date as departureDate, 
        departure_time as departureTime, 
        arrival_time as arrivalTime, 
        price
    FROM 
        find_routes(:_departure_date, :_start_station_id, :_end_station_id) AS route
    """, nativeQuery = true)
    List<SpecificRoute> getSpecificRoute(
            @Param("_departure_date") LocalDate departureDate,
            @Param("_start_station_id") Long startStationId,
            @Param("_end_station_id") Long endStationId);

    @Query(nativeQuery = true, value = """
    SELECT 
        route_id AS routeId, 
        departure_day AS departureDay, 
        departure_date AS departureDate, 
        departure_time AS departureTime, 
        start_station_name AS startStationName,
        arrival_time AS arrivalTime,
        end_station_name AS endStationName
    FROM 
        find_schedule(:_departure_date, :_start_station_id) AS route
    """)
    List<ScheduleView> getSchedule(@Param("_departure_date") LocalDate departureDate,
                                   @Param("_start_station_id") Long startStationId);

}
