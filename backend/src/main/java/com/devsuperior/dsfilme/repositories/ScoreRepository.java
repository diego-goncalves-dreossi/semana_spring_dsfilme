package com.devsuperior.dsfilme.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsfilme.entities.Score;
import com.devsuperior.dsfilme.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
	//Operações com banco de dados
	
}
