package ee.veebirakendus.repository;

import ee.veebirakendus.entity.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlightRepository extends JpaRepository<Flight, Long> {
}

//package ee.example.arv.repository;