package com.ojosdgato.ojosdgato.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.ojosdgato.ojosdgato.Entity.Card;
import com.ojosdgato.ojosdgato.Repository.CardRepository;

@Service
public class CardService {
	@Autowired
	private CardRepository cardRepository;
	
	//Obtener Get
	public List<Card> getAllCards(){
		return cardRepository.findAll();
	}
	
	//Get by ID
	public Card getCardById(Long id) {
		return cardRepository.findById(id).orElse(null);
	}
	//Crear Post
	public Card createCard(Card card) {
		return cardRepository.save(card);
	}
	//Actualiza Put
	public Card updateCard(Card card) {
		return cardRepository.save(card);
	}
	
	//Borrar Delete
	public void deleteCard(Long id) {
		cardRepository.deleteById(id);
	}
}
