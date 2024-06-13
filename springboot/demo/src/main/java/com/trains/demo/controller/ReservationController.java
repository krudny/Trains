package com.trains.demo.controller;


import com.trains.demo.model.Reservation;
import com.trains.demo.model.nonpersistent.ChangeReservationStatus;
import com.trains.demo.services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reservations")
@CrossOrigin(origins = "http://localhost:5173")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @PostMapping("/add")
    public ResponseEntity<Integer> addReservation(@RequestBody Reservation request) {
         Integer reservationId=reservationService.addReservation(
                request.getUserId(),
                request.getDiscountId(),
                request.getRouteId(),
                request.getStartStation(),
                request.getEndStation(),
                request.getDepartureDate(),
                request.getSeatId()
        );
        return new ResponseEntity<>(reservationId, HttpStatus.CREATED);

    }
    @PostMapping("/change_status")
    public void changeReservationStatus(@RequestBody ChangeReservationStatus request){
        reservationService.changeReservationStatus(request.getReservationId(), request.getStatus());
    }

    @GetMapping("/price")
    public Double getReservationPrice(@RequestParam Long reservationId){
        return reservationService.getReservationPrice(reservationId);
    }
}
