package com.devsuperior.dsfilme.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsfilme.dto.MovieDTO;
import com.devsuperior.dsfilme.entities.Movie;
import com.devsuperior.dsfilme.repositories.MovieRepository;

@Service
public class MovieService {
	@Autowired
	private MovieRepository repository;
	// O serviço devolve ao controlador REST
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable){
		//ACESSAR BANCO DE DADOS
		//Com página
		Page<Movie> result = repository.findAll(pageable);
		Page<MovieDTO> page = result.map(x -> new MovieDTO(x));
		return page;
	}
	
	public MovieDTO findById(Long id){
		//ACESSAR BANCO DE DADOS
		//Com página
		Movie result = repository.findById(id).get();
		MovieDTO dto = new MovieDTO(result);
		return dto;
	}

}
