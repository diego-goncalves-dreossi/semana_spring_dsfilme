package com.devsuperior.dsfilme.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsfilme.entities.User;

public interface UserRepository extends JpaRepository<User,Long> {
	//Operações com banco de dados
	User findByEmail(String email);
}
