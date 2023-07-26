package com.ojosdgato.ojosdgato.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ojosdgato.ojosdgato.Entity.Card;
import com.ojosdgato.ojosdgato.Entity.User;
import com.ojosdgato.ojosdgato.Service.CardService;
import com.ojosdgato.ojosdgato.Service.UserService;

@RequestMapping(path="/ojosdgato/cards")
@RestController
public class CardController {
	
	private CardService cardService;
	private UserService userService;
	
	@Autowired
	public CardController(CardService cardService, UserService userService) {
		super();
		this.cardService = cardService;
		this.userService = userService;
	}
	
	@GetMapping
	public List<Card> getCard(){
		return cardService.getAllCards();
	}

	//Get individual
	@GetMapping("/{id}")
	public Card getCardById(@PathVariable Long id) {
		return cardService.getCardById(id);
	}
	
	@PostMapping
	public Card createCard(@RequestBody Card card) {
		//Encontrar que exista el usuario en bd
		User persistentUser=userService.getUserById(card.getUser().getId_user());
		card.setUser(persistentUser);
		return cardService.createCard(card);
	}
	
	//Put
	@PutMapping
	public Card updateCard(@RequestBody Card card) {
		return cardService.updateCard(card);
	}
	
	//Delete
	@DeleteMapping("/{id}")
	public void deleteCard(@PathVariable Long id) {
		cardService.deleteCard(id);
	}
}
