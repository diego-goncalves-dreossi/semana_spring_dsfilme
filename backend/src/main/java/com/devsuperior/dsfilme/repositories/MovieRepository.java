package com.devsuperior.dsfilme.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsfilme.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie,Long> {
	//Operações com banco de dados
}
