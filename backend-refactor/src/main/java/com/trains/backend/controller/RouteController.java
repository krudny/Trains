package com.trains.backend.controller;

import com.trains.backend.projection.ScheduleView;
import com.trains.backend.projection.SpecificRoute;
import com.trains.backend.service.RouteService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/route")
public class RouteController {
    RouteService routeService;

    @GetMapping("/specific_route")
    public List<SpecificRoute> getSpecificRoute(@RequestParam LocalDate departureDate,
                                                @RequestParam Long startStationId,
                                                @RequestParam Long endStationId ) {
        return routeService.getSpecificRoute(departureDate, startStationId, endStationId);
    }

    @GetMapping("/schedule")
    public List<ScheduleView> getSchedule(@RequestParam LocalDate departureDate,
                                          @RequestParam Long startStationId) {
        return routeService.getSchedule(departureDate, startStationId);
    }
}
