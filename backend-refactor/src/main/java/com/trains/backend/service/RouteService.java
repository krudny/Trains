package com.trains.backend.service;

import com.trains.backend.projection.ScheduleView;
import com.trains.backend.projection.SpecificRoute;
import com.trains.backend.repository.RouteRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@AllArgsConstructor
public class RouteService {
    RouteRepository routeRepository;

    public List<SpecificRoute> getSpecificRoute(LocalDate departureDate, Long startStationId, Long endStationId) {
        return routeRepository.getSpecificRoute(departureDate, startStationId, endStationId);
    }

    public List<ScheduleView> getSchedule(LocalDate departureDate, Long startStationId) {
        return routeRepository.getSchedule(departureDate, startStationId);
    }
}
