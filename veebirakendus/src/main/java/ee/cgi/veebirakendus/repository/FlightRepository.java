package ee.cgi.veebirakendus.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ee.cgi.veebirakendus.entity.Flight;

public interface FlightRepository extends JpaRepository<Flight, Long> {
}

//package ee.example.arv.repository;