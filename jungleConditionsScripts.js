// LOCATION FUNCTIONS
// Beach Encounter
function beachEncounter(value) { 
var randomNumber = Math.floor(Math.random()*100+1); 

switch(randomNumber) {
	case 1: 	
	case 2: 	
	case 3: 	
	case 4: 	
	case 5: 	
	case 6: 	
	case 7: value = "Aarakocra X " + Math.floor(Math.random()*4+2);
break;		
	case 8: value = "Artus Cimber Encounter";
break;		
	case 9: 		
	case 10: value = cacheGenerator(value);
break;		
	case 11: 		
	case 12: value = "Chingwa X 1";	break;	
	case 13:	
	case 14: value = "Allosaurus X " + Math.floor(Math.random()*3+1);
break;		
	case 15: 		
	case 16: value = "Dimetrodon X " + Math.floor(Math.random()*12+1);
break; 
	case 17: 	
	case 18: 	
	case 19: 	
	case 20: 	
	case 21: value = "Plesiosaurus X 2";
break;
	case 22: 
	case 23: 
	case 24: 
	case 25: 
	case 26: 
	case 27: 
	case 28: value = "Pteranodon X " + Math.floor(Math.random()*12+1);
break;
	case 29: 
	case 30: 		
	case 31: value = "Quetzalcoatlus X " + Math.floor(Math.random()*4+2);
break;		
	case 32: 		
	case 33: 		
	case 34: 		
	case 35: 		
	case 36:  
	case 37: value = "Velociraptor X " + Math.floor(Math.random()*18+1);
break;
	case 38: 
	case 39: 
	case 40: value = "Red dragon X 1";
break;		
	case 41: 		
	case 42: value = "Emerald Enclave members X " + Math.floor(Math.random()*4+2);
break;		
	case 43: 		
	case 44: 		
	case 45: 		
	case 46: value = liveExplorerGenerator(value);
break; 
	case 47: 
	case 48: 
	case 49: value = flamingFistGenerator(value);
break;
	case 50: 		
	case 51: 		
	case 52: value = "Flying monkey X " + Math.floor(Math.random()*18+1);
break;		
	case 53: 		
	case 54: 		
	case 55: value = flyingSnakesGenerator(value);
break;		
	case 56:  
	case 57: value = "Frost giant X 3 accompanied by winter wolf X " + Math.floor(Math.random()*2+1);
break;
	case 58: 
	case 59: 
	case 60: 		
	case 61: 		
	case 62: 		
	case 63: value = "Giant lizard X " + Math.floor(Math.random()*6+1);
break;		
	case 64: 		
	case 65: 		
	case 66:  
	case 67: value = "Giant snapping turtle X 1";
break;
	case 68: 
	case 69: 
	case 70: 		
	case 71: value = "Lizardfolk X " + Math.floor(Math.random()*4+1) + " and lizardfolk shaman X 1";
break;		
	case 72: 		
	case 73: 		
	case 74: value = "Red Wizard X 1 accompanied by guards X " + Math.floor(Math.random()*6+1) + " and skeletons X " + Math.floor(Math.random()*6+1);
break;		
	case 75: 		
	case 76:  
	case 77: 
	case 78: 
	case 79: 
	case 80: 		
	case 81: 		
	case 82: 		
	case 83: 		
	case 84: value = "Sea hags X 3";
break;		
	case 85: 		
	case 86:  
	case 87: value = "Stirge X " + Math.floor(Math.random()*12+1);
break;
	case 88: 
	case 89: value = "Swarm of bats X " + Math.floor(Math.random()*4+1);
break;
	case 90: 		
	case 91: 		
	case 92: 		
	case 93: 		
	case 94: value = "Tabaxi hunter X 1";
break;		
	case 95: 		
	case 96:  
	case 97: 
	case 98: 
	case 99: 
	case 100: value = "Tri-flower frond X " + Math.floor(Math.random()*4+1);
break;			
}
return value;	
}

// Jungle (No Undead)
function jungleNoUndeadEncounter(value) { 
var randomNumber = Math.floor(Math.random()*100+1);

switch(randomNumber) {
	case 1: value =  "Albino dwarf warriors X " + Math.floor(Math.random()*4+4); break;
	case 2: value = "Almiraj X " + Math.floor(Math.random()*20+1); break;
	case 3: 
	case 4: value = "Ape X " + Math.floor(Math.random()*8+1); break;	
	case 5: value = "Artus Cimber Encounter"; break;	
	case 6: 	
	case 7: value = "Assassin vine X " + Math.floor(Math.random()*3+1); break;		
	case 8: value = "Axe beak X " + Math.floor(Math.random()*20+4); break;		
	case 9: value = "Baboon X " + Math.floor(Math.random()*20+1); break;		
	case 10: 		
	case 11: value = cacheGenerator(value); break;		
	case 12: 		
	case 13: value = "Tribal warrior X " + Math.floor(Math.random()*18+1); break;		
	case 14: 		
	case 15: value = "Chingwa X 1"; break;		
	case 16: value = "Cyclops X 1"; break; 
	case 17: value = "Allosaurus X " + Math.floor(Math.random()*3+1); break;
	case 18: value = "Ankylosaurus X 1"; break;
	case 19: value = "Brontosaurus X 1"; break;
	case 20: 
	case 21: value = "Deinonychus X " + Math.floor(Math.random()*4+3); break;
	case 22: 
	case 23: value = "Hadrosaurus X " + Math.floor(Math.random()*18+1); break;
	case 24: value = "Pteranodon X " + Math.floor(Math.random()*12+1); break;
	case 25: 
	case 26: value = "Stegosaurus X 1"; break;
	case 27: 
	case 28: value= "Triceratops X 1"; break;
	case 29: 
	case 30: value = "Tyrannosaurus X 1"; break;		
	case 31: 		
	case 32: 		
	case 33: 		
	case 34: 		
	case 35: value = "Velociraptor X " + Math.floor(Math.random()*18+1); break;		
	case 36: value = "Faerie dragon X 1"; break; 
	case 37: value = "Eblis X " + Math.floor(Math.random()*4+2); break;
	case 38: 
	case 39: 
	case 40: 		
	case 41: 		
	case 42: value = "Emerald Enclave party consisting of Priest X 1 and Scout X " + Math.floor(Math.random()*4+2) + " seeking to rid the jungle of undead"; break;		
	case 43: 		
	case 44: value = deadExplorersGenerator(value); break;		
	case 45: value = liveExplorerGenerator(value); break;		
	case 46: value = "Flail snail X 1"; break; 
	case 47: 
	case 48: 
	case 49: 
	case 50: value = flamingFistGenerator(value); break;		
	case 51: value = "Flying monkey X " + Math.floor(Math.random()*18+1); break;		
	case 52: 		
	case 53: value = flyingSnakesGenerator(value); break;		
	case 54: 		
	case 55: value = "Frost giant X 3 accompanied by winter wolf X " + Math.floor(Math.random()*2+1); break;		
	case 56: value = "Giant boar X " + Math.floor(Math.random()*4+2); break; 
	case 57: value = "Giant frog X " + Math.floor(Math.random()*12+1); break;
	case 58: value = "Giant lizard X " + Math.floor(Math.random()*6+1); break;
	case 59: value = "Giant scorpion X " + Math.floor(Math.random()*3+1); break;
	case 60: value = "Giant wasp X " + Math.floor(Math.random()*6+1); break;		
	case 61: 		
	case 62: value = "Girallon X 2"; break;		
	case 63: 		
	case 64: value = "Batiri X " + Math.floor(Math.random()*12+4); break;		
	case 65: 		
	case 66: value = "Grung X " + Math.floor(Math.random()*12+1); break; 
	case 67: value = "Jaculis X " + Math.floor(Math.random()*6+1); break;
	case 68: value = "Kamadan X " + Math.floor(Math.random()*2+1); break;
	case 69: 
	case 70: value = "Lizardfolk X " + Math.floor(Math.random()*4+1) + " and lizardfolk shaman X 1"; break;		
	case 71: 		
	case 72: value = "Mad Monkey Mist cloud covering " + Math.floor(Math.random()*6+1) + " 20-foot squares"; break;		
	case 73: value = "Patch of mantraps X " + Math.floor(Math.random()*4+2); break;		
	case 74: value = "Night hag X 1"; break;		
	case 75: value = "Pterafolk X " + Math.floor(Math.random()*4+3); break;		
	case 76: value = rarePlantsGenerator(value); break; 
	case 77: value = "Red Wizard X 1 accompanied by guard X " + Math.floor(Math.random()*6+1) + " and skeletons X " + Math.floor(Math.random()*6+1); break;
	case 78: 
	case 79: value = "Constrictor snake X 1"; break;
	case 80: value = "Giant constrictor snake X 1"; break;		
	case 81: value = "Giant poisonous snake X 1"; break; 		
	case 82: value = "Giant spider X " + Math.floor(Math.random()*6+1); break;		
	case 83: 		
	case 84: 		
	case 85: value = statueOfUbtaoGenerator(value); break; 		
	case 86: value = "Stirge X " + Math.floor(Math.random()*12+1); break;  
	case 87: value = "Su-monster X " + Math.floor(Math.random()*4+1) + 1; break;
	case 88: value = "Swarm of bats X " + Math.floor(Math.random()*4+1); break;
	case 89: value = "Swarm of insects X " + Math.floor(Math.random()*4+1); break;
	case 90: value = "Tabaxi hunter X 1"; break;		
	case 91: value = "Tiger X 1"; break;		
	case 92: value = "Tri-flower frond X " + Math.floor(Math.random()*4+1); break;		
	case 93: value = "Vegepygmy X " + Math.floor(Math.random()*4+1); break;		
	case 94: value = "Wereboar X 1"; break;		
	case 95: value = "Weretiger X 1"; break;		
	case 96: value = "120-foot radius sphere of winter weather created by Artus Cimber's Ring of Winter"; break; 
	case 97: value = "Yellow musk zombie X "+ Math.floor(Math.random()*18+1) + " and yellow musk creeper X  1"; break;
	case 98: value = "Yuan-ti purebloods X " + Math.floor(Math.random()*6+2); break;
	case 99: value = "Zhent assassin with flying snake pet X 1 accompanied by priest X 1, thug X " + Math.floor(Math.random()*12+1) + " and tribal warrior X " + Math.floor(Math.random()*6+1); break;
	case 100: value = "Zorbo X " + Math.floor(Math.random()*12+1); break;			
}
return value;	
}

// Lesser Undead Encounter
function lesserUndeadEncounter(value) {
	
var randomNumber = Math.floor(Math.random()*100+1);
switch(randomNumber) {
	case 1: value =  "Albino dwarf warriors X " + Math.floor(Math.random()*4+4);
		break;
	case 2: value = "Artus Cimber Encounter";
		break;
	case 3: 
	case 4: 
	case 5: value = "Assassin vine X " + Math.floor(Math.random()*3+1);
		break;
	case 6: value = "Axe beak X " + Math.floor(Math.random()*20+4); break;
	case 7: 
	case 8: value = cacheGenerator(value);
break;		
	case 9: 	
	case 10: value = "Tribal warrior X " + Math.floor(Math.random()*18+1);
break;		
	case 11: value = "Allosaurus X " + Math.floor(Math.random()*3+1); break;		
	case 12: value = "Ankylosaurus X 1"; break;		
	case 13: value = "Deinonychus X " + Math.floor(Math.random()*4+3); break;
	case 14: value = "Hadrosaurus X " + Math.floor(Math.random()*18+1);
break;		
	case 15: value = "Pteranodon X " + Math.floor(Math.random()*12+1); break;	
	case 16: value = "Stegosaurus X 1";
break; 
	case 17: value= "Triceratops X 1"; break;
	case 18: value = "Tyrannosaurus X 1"; break;
	case 19: 
	case 20: value = "Emerald Enclave party consisting of Priest X 1 and Scout X " + Math.floor(Math.random()*4+2) + " seeking to rid the jungle of undead"; break;
	case 21: 
	case 22: value = deadExplorersGenerator(value);
break;
	case 23: value = liveExplorerGenerator(value);
break;
	case 24: 
	case 25: 
	case 26: value = flamingFistGenerator(value);
break;
	case 27: value = flyingSnakesGenerator(value);
break;
	case 28: value = "Giant lizard X " + Math.floor(Math.random()*6+1);
break;
	case 29: value = "Giant wasp X " + Math.floor(Math.random()*6+1);
break;
	case 30: 		
	case 31: value = "Girallon X 2";
break;		
	case 32: 
	case 33: value = "Batiri X " + Math.floor(Math.random()*12+4); break;
	case 34: 
	case 35: value = "Grung X " + Math.floor(Math.random()*12+1);
break;		
	case 36: 
	case 37: 
	case 38: 
	case 39: value = "Mad Monkey Mist cloud covering " + Math.floor(Math.random()*6+1) + " 20-foot squares"; break;
	case 40: 
	case 41: value = "Patch of mantraps X " + Math.floor(Math.random()*4+2);
break;		
	case 42: value = "Night hag X 1";
break;		
	case 43: 
	case 44: value = "Pterafolk X " + Math.floor(Math.random()*4+3);
break;		
	case 45: value = rarePlantsGenerator(value);
break;		
	case 46: value = "Red Wizard X 1 accompanied by guards X " + Math.floor(Math.random()*6+1) + " and skeletons X " + Math.floor(Math.random()*6+1);
break; 
	case 47: 
	case 48: value = "Constrictor snake X 1";
break;
	case 49: value = "Giant constrictor snake X 1";
break;
	case 50: value = "Giant poisonous snake X 1";
break;		
	case 51: 
	case 52: value = "Giant spider X " + Math.floor(Math.random()*6+1); break;
	case 53: 
	case 54: 		
	case 55: value = statueOfUbtaoGenerator(value);
break;		
	case 56:  
	case 57: value = "Stirge X " + Math.floor(Math.random()*12+1);
break;
	case 58: 
	case 59: value = "Su-monster X " + Math.floor(Math.random()*4+1) + 1;
break;
	case 60: 
	case 61: 
	case 62: value = "Swarm of bats X " + Math.floor(Math.random()*4+1);
break;		
	case 63: 
	case 64: 
	case 65: value = "Swarm of insects X " + Math.floor(Math.random()*4+1);
break;		
	case 66: value = "Tri-flower frond X " + Math.floor(Math.random()*4+1);
break; 
	case 67: value = "Troll X 1";
break;
	case 68: 
	case 69: 
	case 70: 
	case 71:
	case 72: value = "Ghoul X " + Math.floor(Math.random()*12+1);
break;		
	case 73: 
	case 74: 
	case 75: 
	case 76: 
	case 77: value = "Skeleton X " + Math.floor(Math.random()*18+1);
break;
	case 78: 
	case 79: value = "Specter X 1";
break;
	case 80: value = "Wight X 1";
break;		
	case 81: 
	case 82: 
	case 83: 
	case 84: 
	case 85: 
	case 86: 
	case 87: 
	case 88: 
	case 89: value = zombieGenerator(value); break;
	case 90: 		
	case 91: value = "Vegepygmy X " + Math.floor(Math.random()*4+1);
break;		
	case 92: value = "Wereboar X 1";
break;		
	case 93: value = "Weretiger X 1";
break;		
	case 94: value = "120-foot radius sphere of winter weather created by Artus Cimber's Ring of Winter";
break;		
	case 95: 
	case 96: value = "Yellow musk zombie X "+ Math.floor(Math.random()*18+1) + " and yellow musk creeper X  1";
break; 
	case 97: 
	case 98: value = "Yuan-ti purebloods X " + Math.floor(Math.random()*6+2);
break;
	case 99: 
	case 100: value = "Zorbo X " + Math.floor(Math.random()*12+1);
break;			
}
return value;	
}

// Jungle (Greater Undead)
function jungleGreaterUndeadEncounter(value) { 
var randomNumber = Math.floor(Math.random()*100+1); 

switch(randomNumber) {
	case 1: value = "Artus Cimber Encounter"; break;
	case 2: value = "Assassin vine X " + Math.floor(Math.random()*3+1); break;
	case 3: 
	case 4: 	
	case 5: value = cacheGenerator(value); break;	
	case 6: value = "Allosaurus X " + Math.floor(Math.random()*3+1); break;	
	case 7: value = "Ankylosaurus X 1"; break;		
	case 8: value = "Hadrosaurus X " + Math.floor(Math.random()*18+1); break;		
	case 9: value = "Pteranodon X " + Math.floor(Math.random()*12+1); break;		
	case 10: value = "Stegosaurus X 1"; break;		
	case 11: 		
	case 12: value = "Tyrannosaurus X 1"; break;		
	case 13: 		
	case 14: value = "Velociraptor X " + Math.floor(Math.random()*18+1); break;		
	case 15: 		
	case 16: value = "Emerald Enclave party consisting of Priest X 1 and Scout X " + Math.floor(Math.random()*4+2) + " seeking to rid the jungle of undead"; break; 
	case 17: 
	case 18: 
	case 19: 
	case 20: value = deadExplorersGenerator(value); break; 
	case 21: value = liveExplorerGenerator(value); break;
	case 22: 
	case 23: value = flamingFistGenerator(value); break;
	case 24: value = "Giant wasp X " + Math.floor(Math.random()*6+1); break;
	case 25: value = "Patch of mantraps X " + Math.floor(Math.random()*4+2); break;
	case 26: value = "Pterafolk X " + Math.floor(Math.random()*4+3); break;
	case 27: value = rarePlantsGenerator(value); break;
	case 28: value = "Red Wizard X 1 accompanied by guard X " + Math.floor(Math.random()*6+1) + " and skeletons X " + Math.floor(Math.random()*6+1); break;
	case 29: 
	case 30: 		
	case 31: value = "Constrictor snake X 1"; break;		
	case 32: value = "Giant constrictor snake X 1"; break;		
	case 33: value = "Giant poisonous snake X 1"; break; 		
	case 34: 		
	case 35: 		
	case 36: value = "Giant spider X " + Math.floor(Math.random()*6+1); break;  
	case 37: 
	case 38: 
	case 39: 
	case 40: value = statueOfUbtaoGenerator(value); break; 		
	case 41: 		
	case 42: 		
	case 43: 		
	case 44: value = "Stirge X " + Math.floor(Math.random()*12+1); break; 		
	case 45: value = "Su-monster X " + Math.floor(Math.random()*4+1) + 1; break; 		
	case 46: value = "Swarm of bats X " + Math.floor(Math.random()*4+1); break; 
	case 47: 
	case 48: 
	case 49: value = "Swarm of insects X " + Math.floor(Math.random()*4+1); break;
	case 50: value = "Tri-flower frond X " + Math.floor(Math.random()*4+1); break;		
	case 51: value = "Troll X 1"; break;		
	case 52: 		
	case 53: 		
	case 54: 		
	case 55: 		
	case 56:  
	case 57: 
	case 58: 
	case 59: 
	case 60: 		
	case 61: 		
	case 62: 		
	case 63: value = "Ghoul X " + Math.floor(Math.random()*12+1); break;		
	case 64: 		
	case 65: 		
	case 66:  
	case 67: value = "Skeleton X " + Math.floor(Math.random()*18+1); break;
	case 68: 
	case 69: 
	case 70: value = "Specter X 1"; break;		
	case 71: 		
	case 72: 		
	case 73: value = "Wight X 1"; break;		
	case 74: 		
	case 75: 		
	case 76:  
	case 77: 
	case 78: 
	case 79: 
	case 80: 		
	case 81: 		
	case 82: 		
	case 83: 		
	case 84: 		
	case 85: value = zombieGenerator(value); break;		
	case 86:  
	case 87: value = "Vegepygmy X " + Math.floor(Math.random()*4+1); break;
	case 88: 
	case 89: value = "Wereboar X 1"; break;
	case 90: 		
	case 91: value = "Weretiger X 1"; break;		
	case 92: value = "120-foot radius sphere of winter weather created by Artus Cimber's Ring of Winter"; break;		
	case 93: 		
	case 94: 		
	case 95: 		
	case 96: value = "Yellow musk zombie X "+ Math.floor(Math.random()*18+1) + " and yellow musk creeper X  1"; break; 
	case 97: 
	case 98: value = "Yuan-ti purebloods X " + Math.floor(Math.random()*6+2); break;
	case 99: 
	case 100: value = "Zorbo X " + Math.floor(Math.random()*12+1); break;			
}
return value;	
}

// River Encounter
function riverEncounter(value) { 
var randomNumber = Math.floor(Math.random()*100+1); 

switch(randomNumber) {
	case 1: 
	case 2: 
	case 3: value = "Aarakocra X " + Math.floor(Math.random()*4+2); break;
	case 4: 	
	case 5: 	
	case 6: 	
	case 7: value = "Aldani X " + Math.floor(Math.random()*4+1); break;		
	case 8: 		
	case 9: value = "Artus Cimber Encounter"; break;		
	case 10: value = "Assassin vine X " + Math.floor(Math.random()*3+1); break;		
	case 11: 		
	case 12: value = cacheGenerator(value); break;		
	case 13: 		
	case 14: 		
	case 15: value = "Tribal warrior X " + Math.floor(Math.random()*18+1); break;		
	case 16:  
	case 17: 
	case 18: value = "Chingwa X 1"; break;
	case 19: 
	case 20: 
	case 21: 
	case 22:
	case 23: value = "Crocodile X " + Math.floor(Math.random()*4+2); break;
	case 24: value = "Brontosaurus X 1"; break;
	case 25: 
	case 26: value = "Dimetrodon X " + Math.floor(Math.random()*12+1); break;
	case 27: 
	case 28: value = "Hadrosaurus X " + Math.floor(Math.random()*18+1); break;
	case 29: 
	case 30: 		
	case 31: value = "Plesiosaurus X 2"; break;		
	case 32: 		
	case 33: 		
	case 34: value = "Pteranodon X " + Math.floor(Math.random()*12+1); break;		
	case 35: 		
	case 36: value = "Quetzalcoatlus X " + Math.floor(Math.random()*4+2); break; 
	case 37: value = "Faerie dragon X 1"; break;
	case 38: 
	case 39: 
	case 40: value = "Eblis X " + Math.floor(Math.random()*4+2); break;		
	case 41: 		
	case 42: 		
	case 43: value = "Emerald Enclave party consisting of Priest X 1 and Scout X " + Math.floor(Math.random()*4+2) + " seeking to rid the jungle of undead"; break;		
	case 44: 		
	case 45: value = deadExplorersGenerator(value); break;		
	case 46:  
	case 47: 
	case 48: 
	case 49: value = liveExplorerGenerator(value); break;
	case 50: 		
	case 51: value = flamingFistGenerator(value); break;		
	case 52: 		
	case 53: value = "Flying monkey X " + Math.floor(Math.random()*18+1); break;		
	case 54: 		
	case 55: value = flyingSnakesGenerator(value); break;
	case 56:  
	case 57: 
	case 58: value = "Giant boar X " + Math.floor(Math.random()*4+2); break;
	case 59: 
	case 60: value = "Giant frog X " + Math.floor(Math.random()*12+1); break;		
	case 61: 		
	case 62: value = "Giant snapping turtle X 1"; break;		
	case 63: value = "Giant wasp X " + Math.floor(Math.random()*6+1); break;		
	case 64: 		
	case 65: 		
	case 66: value = "Grung X " + Math.floor(Math.random()*12+1); break; 
	case 67: value = "Jaculis X " + Math.floor(Math.random()*6+1); break;
	case 68: value = "Lizardfolk X " + Math.floor(Math.random()*4+1) + " and lizardfolk shaman X 1"; break;
	case 69: 
	case 70: value = "Mad Monkey Mist cloud covering " + Math.floor(Math.random()*6+1) + " 20-foot squares"; break;		
	case 71: 		
	case 72: value = "Pterafolk X " + Math.floor(Math.random()*4+3); break;		
	case 73: value = rarePlantsGenerator(value); break;		
	case 74: value = "Red Wizard X 1 accompanied by guard X " + Math.floor(Math.random()*6+1) + " and skeletons X " + Math.floor(Math.random()*6+1); break;		
	case 75: 		
	case 76: value = "Sea hags X 3"; break; 
	case 77: 
	case 78: 
	case 79: value = "Constrictor snake X 1"; break;
	case 80: value = "Giant constrictor snake X 1"; break;		
	case 81: value = statueOfUbtaoGenerator(value); break; 		
	case 82: 		
	case 83: value = "Stirge X " + Math.floor(Math.random()*12+1); break; 		
	case 84: 		
	case 85: value = "Swarm of insects X " + Math.floor(Math.random()*4+1); break;		
	case 86:  
	case 87: 
	case 88: 
	case 89: 
	case 90: 		
	case 91: value = "Swarm of quippers X " + Math.floor(Math.random()*4+1); break;		
	case 92: 		
	case 93: value = "Tabaxi hunter X 1"; break;		
	case 94: value = "Ghoul X " + Math.floor(Math.random()*12+1); break;		
	case 95: value = "Skeleton X " + Math.floor(Math.random()*18+1); break;		
	case 96: value = zombieGenerator(value); break; 
	case 97: 
	case 98: value = "Yuan-ti purebloods X " + Math.floor(Math.random()*6+2); break;
	case 99: 
	case 100: value = "Zhent assassin with flying snake pet X 1 accompanied by priest X 1, thug X " + Math.floor(Math.random()*12+1) + " and tribal warrior X " + Math.floor(Math.random()*6+1); break;			
}
return value;	
}

// Mountain Encounter
function mountainEncounter(value) { 
var randomNumber = Math.floor(Math.random()*100+1);

switch(randomNumber) {
	case 1: 
	case 2: 
	case 3: 
	case 4: 	
	case 5: 	
	case 6: 	
	case 7: 		
	case 8: 		
	case 9: 		
	case 10: 		
	case 11: value = "Aarakocra X " + Math.floor(Math.random()*4+2); break;		
	case 12: 		
	case 13: 		
	case 14: 		
	case 15: 		
	case 16:  
	case 17: value =  "Albino dwarf warriors X " + Math.floor(Math.random()*4+4); break;
	case 18: 
	case 19: 
	case 20: value = "Ape X " + Math.floor(Math.random()*8+1); break;
	case 21: 
	case 22: value = "Baboon X " + Math.floor(Math.random()*20+1); break;
	case 23: 
	case 24: 
	case 25: value = cacheGenerator(value); break;
	case 26: 
	case 27: value = "Chingwa X 1"; break;
	case 28: 
	case 29: value = "Cyclops X 1"; break;
	case 30: 		
	case 31: 		
	case 32: 		
	case 33: 		
	case 34: 		
	case 35: 		
	case 36:  
	case 37: 
	case 38: value = "Pteranodon X " + Math.floor(Math.random()*12+1); break;
	case 39: 
	case 40: 		
	case 41: 		
	case 42: value = "Quetzalcoatlus X " + Math.floor(Math.random()*4+2); break;		
	case 43: 		
	case 44: 		
	case 45: value = "Red dragon X 1"; break;		
	case 46:  
	case 47: value = "Emerald Enclave party consisting of Priest X 1 and Scout X " + Math.floor(Math.random()*4+2) + " seeking to rid the jungle of undead"; break;
	case 48: 
	case 49: 
	case 50: value = deadExplorersGenerator(value); break;		
	case 51: 		
	case 52: 		
	case 53: value = liveExplorerGenerator(value); break;		
	case 54: 		
	case 55: 		
	case 56:  
	case 57: 
	case 58: 
	case 59: value = "Flying monkey X " + Math.floor(Math.random()*18+1); break;
	case 60: 		
	case 61: value = flyingSnakesGenerator(value); break;		
	case 62: value = "Giant boar X " + Math.floor(Math.random()*4+2); break;		
	case 63: value = "Giant lizard X " + Math.floor(Math.random()*6+1); break;		
	case 64: 		
	case 65: value = "Giant wasp X " + Math.floor(Math.random()*6+1); break;		
	case 66:  
	case 67: 
	case 68: 
	case 69: 
	case 70: value = "Girallon X 2"; break;		
	case 71: 		
	case 72: 		
	case 73: value = "Night hag X 1"; break;		
	case 74: 		
	case 75: 		
	case 76:  
	case 77: 
	case 78: 
	case 79: 
	case 80: value = "Pterafolk X " + Math.floor(Math.random()*4+3); break;		
	case 81: value = "Red Wizard X 1 accompanied by guard X " + Math.floor(Math.random()*6+1) + " and skeletons X " + Math.floor(Math.random()*6+1); break;		
	case 82: 		
	case 83: 		
	case 84: value = "Giant poisonous snake X 1"; break; 		
	case 85: 		
	case 86:  
	case 87: value = "Stirge X " + Math.floor(Math.random()*12+1); break;
	case 88: 
	case 89: 
	case 90: value = "Swarm of bats X " + Math.floor(Math.random()*4+1); break;		
	case 91: 		
	case 92: value = "Tabaxi hunter X 1"; break;		
	case 93: 		
	case 94: 		
	case 95: 		
	case 96:  
	case 97: value = "Troll X 1"; break;
	case 98: 
	case 99: 
	case 100: value = "Wereboar X 1"; break;			
}
return value;	
}

// Ruins Encounters
function ruinsEncounter(value) { 
var randomNumber = Math.floor(Math.random()*100+1);

switch(randomNumber) {
	case 1: 
	case 2: value =  "Albino dwarf warriors X " + Math.floor(Math.random()*4+4); break;
	case 3: value = "Almiraj X " + Math.floor(Math.random()*20+1); break;
	case 4: 	
	case 5: 	
	case 6: value = "Ape X " + Math.floor(Math.random()*8+1); break;	
	case 7: 		
	case 8: value = "Artus Cimber Encounter"; break;		
	case 9: 		
	case 10: 		
	case 11: 		
	case 12: value = "Assassin vine X " + Math.floor(Math.random()*3+1); break;		
	case 13: 		
	case 14: value = "Baboon X " + Math.floor(Math.random()*20+1); break;		
	case 15: 		
	case 16:  
	case 17: 
	case 18: value = cacheGenerator(value); break;
	case 19: value = "Chingwa X 1"; break;
	case 20: 
	case 21: value = "Cyclops X 1"; break;
	case 22: value = "Deinonychus X " + Math.floor(Math.random()*4+3); break;
	case 23: value = "Velociraptor X " + Math.floor(Math.random()*18+1); break;
	case 24: 
	case 25: 
	case 26: value = "Emerald Enclave party consisting of Priest X 1 and Scout X " + Math.floor(Math.random()*4+2) + " seeking to rid the jungle of undead"; break;
	case 27: 
	case 28: value = deadExplorersGenerator(value); break;
	case 29: 
	case 30: 		
	case 31: value = liveExplorerGenerator(value); break;		
	case 32: 		
	case 33: value = "Firenewt warriors mounted on giant striders X " + Math.floor(Math.random()*4+1); break;		
	case 34: 		
	case 35: 		
	case 36: value = flamingFistGenerator(value); break; 
	case 37: 
	case 38: value = "Flying monkey X " + Math.floor(Math.random()*18+1); break;
	case 39: value = flyingSnakesGenerator(value); break;
	case 40: 		
	case 41: value = "Frost giant X 3 accompanied by winter wolf X " + Math.floor(Math.random()*2+1); break;		
	case 42: value = "Giant lizard X " + Math.floor(Math.random()*6+1); break;
		
	case 43: 		
	case 44: 		
	case 45: value = "Giant scorpion X " + Math.floor(Math.random()*3+1); break;		
	case 46:  
	case 47: 
	case 48: value = "Giant wasp X " + Math.floor(Math.random()*6+1); break;
	case 49: 
	case 50: value = "Girallon X 2"; break;		
	case 51: 		
	case 52: value = "Batiri X " + Math.floor(Math.random()*12+4); break;		
	case 53: 		
	case 54: value = "Jaculis X " + Math.floor(Math.random()*6+1); break;		
	case 55: 		
	case 56:  
	case 57: value = "Kamadan X " + Math.floor(Math.random()*2+1); break;
	case 58: value = "Lizardfolk X " + Math.floor(Math.random()*4+1) + " and lizardfolk shaman X 1"; break;

	case 59: 
	case 60: value = "Mad Monkey Mist cloud covering " + Math.floor(Math.random()*6+1) + " 20-foot squares"; break;		
	case 61: value = "Night hag X 1"; break;		
	case 62: value = rarePlantsGenerator(value); break;		
	case 63: value = "Red Wizard X 1 accompanied by guard X " + Math.floor(Math.random()*6+1) + " and skeletons X " + Math.floor(Math.random()*6+1); break;		
	case 64: 		
	case 65: 		
	case 66: value = "Giant constrictor snake X 1"; break; 
	case 67: 
	case 68: value = "Giant spider X " + Math.floor(Math.random()*6+1); break; 
	case 69: 
	case 70: 		
	case 71: 		
	case 72: 		
	case 73: value = statueOfUbtaoGenerator(value); break; 		
	case 74: 		
	case 75: value = "Stirge X " + Math.floor(Math.random()*12+1); break; 		
	case 76:  
	case 77: value = "Swarm of bats X " + Math.floor(Math.random()*4+1); break;
	case 78: value = "Tabaxi hunter X 1"; break;
	case 79: 
	case 80: value = "Tri-flower frond X " + Math.floor(Math.random()*4+1); break;		
	case 81: value = "Troll X 1"; break;		
	case 82: 		
	case 83: 		
	case 84: value = "Ghoul X " + Math.floor(Math.random()*12+1); break;		
	case 85: 		
	case 86:  
	case 87: value = "Skeleton X " + Math.floor(Math.random()*18+1); break;
	case 88: 
	case 89: value = "Specter X 1"; break;
	case 90: 		
	case 91: value = "Wight X 1"; break;		
	case 92: 		
	case 93: value = zombieGenerator(value); break;		
	case 94: value = "Weretiger X 1"; break;		
	case 95: value = "120-foot radius sphere of winter weather created by Artus Cimber's Ring of Winter"; break;		
	case 96: value = "Yellow musk zombie X "+ Math.floor(Math.random()*18+1) + " and yellow musk creeper X  1"; break; 
	case 97: 
	case 98: value = "Yuan-ti purebloods X " + Math.floor(Math.random()*6+2); break;
	case 99: 
	case 100: value = "Zhent assassin with flying snake pet X 1 accompanied by priest X 1, thug X " + Math.floor(Math.random()*12+1) + " and tribal warrior X " + Math.floor(Math.random()*6+1); break;			
}
return value;	
}
	
// Swamp Encounter
function swampEncounter(value) { 
var randomNumber = Math.floor(Math.random()*100+1);

switch(randomNumber) {
	case 1: 
	case 2: 
	case 3: 
	case 4: 	
	case 5: 	
	case 6: 	
	case 7: 		
	case 8: 		
	case 9: 		
	case 10: value = "Aldani X " + Math.floor(Math.random()*4+1); break;		
	case 11: value = "Artus Cimber Encounter"; break;		
	case 12: 		
	case 13: 		
	case 14: value = "Assassin vine X " + Math.floor(Math.random()*3+1); break;		
	case 15: 		
	case 16: value = "Chingwa X 1"; break; 
	case 17: 
	case 18: 
	case 19: 
	case 20: 
	case 21: value = "Crocodile X " + Math.floor(Math.random()*4+2); break;
	case 22: value = "Allosaurus X " + Math.floor(Math.random()*3+1); break;
	case 23: value = "Ankylosaurus X 1"; break;
	case 24: 
	case 25: value = "Brontosaurus X 1"; break;
	case 26: 
	case 27: 
	case 28: 
	case 29: 
	case 30: value = "Dimetrodon X " + Math.floor(Math.random()*12+1); break;		
	case 31: 		
	case 32: 		
	case 33: value = "Hadrosaurus X " + Math.floor(Math.random()*18+1); break;		
	case 34: 		
	case 35: value = "Pteranodon X " + Math.floor(Math.random()*12+1); break;		
	case 36:  
	case 37: 
	case 38: 
	case 39: value = "Eblis X " + Math.floor(Math.random()*4+2); break;
	case 40: 		
	case 41: value = deadExplorersGenerator(value); break;		
	case 42: 		
	case 43: 		
	case 44: 		
	case 45: value = liveExplorerGenerator(value); break;		
	case 46:  
	case 47: value = "Flail snail X 1"; break;
	case 48: 
	case 49: 
	case 50: value = flyingSnakesGenerator(value); break;		
	case 51: 		
	case 52: 		
	case 53: value = "Giant crocodile X 1"; break;		
	case 54: 		
	case 55: 		
	case 56: value = "Giant frog X " + Math.floor(Math.random()*12+1); break; 
	case 57: 
	case 58: value = "Giant lizard X " + Math.floor(Math.random()*6+1); break;
	case 59: 
	case 60: value = "Giant snapping turtle X 1"; break;		
	case 61: 		
	case 62: value = "Giant wasp X " + Math.floor(Math.random()*6+1); break;		
	case 63: 		
	case 64: value = "Grung X " + Math.floor(Math.random()*12+1); break;		
	case 65: 		
	case 66: value = "Lizardfolk X " + Math.floor(Math.random()*4+1) + " and lizardfolk shaman X 1"; break; 
	case 67: 
	case 68: 
	case 69: value = "Mad Monkey Mist cloud covering " + Math.floor(Math.random()*6+1) + " 20-foot squares"; break;
	case 70: value = mephitsGenerator(value); break;		
	case 71: value = "Night hag X 1"; break;		
	case 72: value = rarePlantsGenerator(value); break;		
	case 73: 		
	case 74: 		
	case 75: 		
	case 76: value = "Shambling mound X 1"; break;  
	case 77: 
	case 78: 
	case 79: 
	case 80: value = "Constrictor snake X 1"; break;		
	case 81: 		
	case 82: value = "Giant constrictor snake X 1"; break;		
	case 83: 		
	case 84: 		
	case 85: value = statueOfUbtaoGenerator(value); break;		
	case 86:  
	case 87: value = "Stirge X " + Math.floor(Math.random()*12+1); break; 
	case 88: 
	case 89: value = "Swarm of bats X " + Math.floor(Math.random()*4+1); break;
	case 90: 		
	case 91: 		
	case 92: 		
	case 93: 		
	case 94: value = "Swarm of insects X " + Math.floor(Math.random()*4+1); break;		
	case 95: value = "Ghoul X " + Math.floor(Math.random()*12+1); break;		
	case 96:  
	case 97: value = "Skeleton X " + Math.floor(Math.random()*18+1); break;
	case 98: value = zombieGenerator(value); break;
	case 99: value = "Yellow musk zombie X "+ Math.floor(Math.random()*18+1) + " and yellow musk creeper X  1"; break;
	case 100: value = "Yuan-ti purebloods X " + Math.floor(Math.random()*6+2); break;			
}
return value;	
}

// Wasteland Encounter
function wastelandEncounter(value) { 
var randomNumber = Math.floor(Math.random()*100+1);

switch(randomNumber) {
	case 1: value = "Artus Cimber Encounter"; break;
	case 2: 
	case 3: 
	case 4: 	
	case 5: value = cacheGenerator(value); break;	
	case 6: 	
	case 7: 		
	case 8: 		
	case 9: value = "Red dragon X 1"; break;		
	case 10: 		
	case 11: 		
	case 12: 		
	case 13: 		
	case 14: 		
	case 15: 		
	case 16:  
	case 17: 
	case 18: value = deadExplorersGenerator(value); break;
	case 19: value = liveExplorerGenerator(value); break;
	case 20: 
	case 21: 
	case 22: 
	case 23: 
	case 24: 
	case 25: 
	case 26: 
	case 27: 
	case 28: 
	case 29: 
	case 30: 		
	case 31: 		
	case 32: 		
	case 33: 		
	case 34: 		
	case 35: 		
	case 36:  
	case 37: value = "Firenewt warriors mounted on giant striders X " + Math.floor(Math.random()*4+1); break;
	case 38: 
	case 39: 
	case 40: 		
	case 41: 		
	case 42: 		
	case 43: 		
	case 44: 		
	case 45: value = "Giant scorpion X " + Math.floor(Math.random()*3+1); break;		
	case 46:  
	case 47: 
	case 48: 
	case 49: 
	case 50: 		
	case 51: 		
	case 52: 		
	case 53: 		
	case 54: value = "Mad Monkey Mist cloud covering " + Math.floor(Math.random()*6+1) + " 20-foot squares"; break;		
	case 55: 		
	case 56:  
	case 57: 
	case 58: 
	case 59: 
	case 60: 		
	case 61: 		
	case 62: 		
	case 63: 		
	case 64: 		
	case 65: 		
	case 66:  
	case 67: 
	case 68: 
	case 69: 
	case 70: 		
	case 71: value = mephitsGenerator(value); break;		
	case 72: 		
	case 73: 		
	case 74: 		
	case 75: 		
	case 76:  
	case 77: 
	case 78: value = "Night hag X 1"; break;
	case 79: value = statueOfUbtaoGenerator(value); break;
	case 80: 		
	case 81: 		
	case 82: 		
	case 83: value = "Troll X 1"; break;		
	case 84: 		
	case 85: value = "Ghoul X " + Math.floor(Math.random()*12+1); break;		
	case 86:  
	case 87: 
	case 88: 
	case 89: 
	case 90: 		
	case 91: 		
	case 92: 		
	case 93: 		
	case 94: 		
	case 95: value = "Skeleton X " + Math.floor(Math.random()*18+1); break;		
	case 96:  
	case 97: value = "Wight X 1"; break;
	case 98: value = zombieGenerator(value); break;
	case 99: 
	case 100: value = "Zhent assassin with flying snake pet X 1 accompanied by priest X 1, thug X " + Math.floor(Math.random()*12+1) + " and tribal warrior X " + Math.floor(Math.random()*6+1); break;			
}
return value;	
}

// ENEMIES
// Flaming Fist
function flamingFistGenerator(value) { 
var randomNumber = Math.floor(Math.random()*2+1);
	var patrolLeader = "";
	
if (randomNumber === 1) {
	patrolLeader = "Knight";
}
	else {
		patrolLeader = "Veteran";
	}

value = "Flaming Fist patrol consisting of " + patrolLeader + " X 1 accompanied by acolyte X 1, scout X 1, and guard X " + Math.floor(Math.random()*12+1);

	return value;
}	

// Zombies
function zombieGenerator(value) { 
	
	var randomNumber = Math.floor(Math.random()*4+1);
	
		
		switch(randomNumber) {
		case 1: 
		case 2: 
		case 3: 
			value = "Zombie X " + Math.floor(Math.random()*18+1);
			break;
		case 4: 
		case 5: 
			value = "Ankylosaurus zombie X 1";
			break;
		case 6: 
		case 7: 
			value = "Girallon zombie X " + Math.floor(Math.random()*4+1);
			break;
		case 8: 
		case 9: 
			value = "Ogre zombie X " + Math.floor(Math.random()*4+1);
			break;
		case 10: 
			value = "Tyrannosaurus zombie X 1";
			break;
		
	}
	
	return value;
	}

// Mephits
function mephitsGenerator(value) { 
	var randomNumber = Math.floor(Math.random()*4+1);		
		switch(randomNumber) {
		case 1: 
			value = "Mud mephit X " + Math.floor(Math.random()*12+1);
			break;
		case 2: 
			value = "Magma mephit X " + Math.floor(Math.random()*12+1);
			break;
		case 3: 
			value = "Smoke mephit X " + Math.floor(Math.random()*12+1);
			break;
		case 4: 
			value = "Steam mephit X " + Math.floor(Math.random()*12+1);
			break;
		
	}
	
	return value;
	}

// Flying Snakes
function flyingSnakesGenerator(value) { 
	
	var randomNumber = Math.floor(Math.random()*2+1);
	
		
		switch(randomNumber) {
		case 1: 
			value = "Flying snake X 1";
			break;
		case 2: 
			value = "Flying snake X " + Math.floor(Math.random()*12+1);
			break;	
	}	
	return value;
	}

// LOCATIONS AND NPCS
// Statue of Ubtao
function statueOfUbtaoGenerator(value) { 
	var randomNumber = Math.floor(Math.random()*4+1);
	var treasure = treasureGenerator(treasure);
	if (treasure === "No treasure") {
		treasure = "worthless pieces of bone jewelry";
	}
	
		
		switch(randomNumber) {
		case 1: 
			value = "Statue of Ubtao with " + treasure + " lying at the base";
			break;
		case 2: 
			value = "Statue of Ubtao with a pile of grung, goblin, and su-monster skulls lying at the base"; break;
		case 3: value = "Statue of Ubtao with a <em>glyph of warding</em> inscribed on it, spotted by a DC 15 investigation check. If touched, the glyph erupts in a 20-foot square. Creatures must succeed on a DC 14 Dexterity saving throw or take " + Math.floor(Math.random()*40+1) + " damage on a failed save, or half as much on a successful one."; break;
		case 4: 
			value = "Statue of Ubtao inscribed with a maze solved with a DC 10 Intelligence check, rewarding the character with the power to cast the spell <em>find the path</em> as an action once per day";
			break;
		
		
	}
	
	return value;
	}
	
// Rare Plants
function rarePlantsGenerator(value) { 	
	var randomNumber = Math.floor(Math.random()*6+1);	
		switch(randomNumber) {
		case 1: 
			value = "Dancing monkey fruit X " + Math.floor(Math.random()*12+1);
			break;
		case 2: 
			value = "Menga bush leaves X " + Math.floor(Math.random()*12+1);
			break;
		case 3: 
			value = "Ryath roots X " + Math.floor(Math.random()*4+1);
			break;
		case 4: 
			value = "Sinda berries X " + Math.floor(Math.random()*24+1);
			break;
		case 5: 
			value = "Wukka tree with wukka nuts X " + Math.floor(Math.random()*12+1);
			break;
		case 6: 
			value = "Tree with zabou X " + Math.floor(Math.random()*6+1);
			break;
		
	}
	
	return value;
	}
	
// Dead Explorers
function deadExplorersGenerator(value) { 
	
	var randomNumber = Math.floor(Math.random()*20+1);
	
		
		switch(randomNumber) {
		case 1: 
			value = "Dead halfling riddled with arrows, hanging from a tree";
			break;
		case 2: 
			value = "Bones of unarmored humanoid lashed to a tree with vines, the work of Batiri goblins";
			break;
		case 3: 
			value = "Crushed remains of dwarf trampled by a dinosaur";
			break;
		case 4: value = "Gnawed and charred remains of a humanoid cannibalized by their traveling companions";
break;	
	case 5: value = "Mangled body of half-elf apparently dropped from a tall height by Pterafolk";
break;	
	case 6: value = "Scattered bones of a dwarf torn apart by Velociraptors";
break;	
	case 7: value = "Swollen, purple body of an elf bit by a poisonous snake";
break;		
	case 8: value = "Fresh human corpse stuffed into a hollow tree by Girallons planing to eat it later";
break;		
	case 9: value = "Skeleton of a humanoid sitting on a stool, clutching a fork and knife";
break;		
	case 10: value = "Husk of a gnome coccooned in a giant spider web";
break;		
	case 11: value = "A human torso, torn in half by an attacking T-Rex";
break;		
	case 12: value = "Charred elf skeleton inside of a giant snake skeleton, both killed by lightning bolt spell";
break;		
	case 13: value = "Rotting body of a giant frog with a shortsword poking out of its back, partially digested halfling can be found if cut open";
break;		
	case 14: value = "Tabaxi with severed limbs sewn back onto its body in the wrong arrangement";
break;		
	case 15: value = "Half-orc impaled to a tree by broken off triceratops horn";
break;		
	case 16: value = "Overcooked but not eaten gnome spitted out over a fire pit, Batiri goblin tools can be found scattered about";
break; 
	case 17: value = "Headless humanoid hung upside down from a tree, impaled symmetrically by six Batiri goblin spears";
break;
	case 18: value = "Body of an elf balanced on a tree branch 40 feet above ground, note on the elf reveals they climbed the tree to flee an allosaurus but was to afraid to come down";
break;
	case 19: value = "Moldering remains of a human with broken legs, killed by falling off of a cliff after being hit by a faerie dragon's euphoria breath";
break;
	case 20: value = "Corpse of a dwarf with six large holes piercing her armor and chest, killed by a stegosaurus";
break;
		
		
	}
	
	return value;
	}

// Live Explorers
function liveExplorerGenerator(value) { 
	
	var situationNumber = Math.floor(Math.random()*6+1);
	var enemyNumber = Math.floor(Math.random()*4+1);
	var explorerEnemies = "";
	var situation = "";
	
	switch(enemyNumber) {
		case 1: explorerEnemies = "firenewts";
				break;
		case 2: explorerEnemies = "ghouls";
				break;
		case 3: explorerEnemies = "Batiri";
				break;
		case 4: explorerEnemies = "grungs";
				break;
		
	}
		
		switch(situationNumber) {
		case 1: situation = " who are lost and hungry";
				break; 
		case 2: situation = " who are being pursued by " + explorerEnemies;
				break;
		case 3: situation = " who are healthy and headed towards the nearest landmark";
				break;
		case 4: situation = " who are healthy and headed back to Port Nyanzaru for rest and supplies";
				break;
		
	}
	
	
	
	value = "Band of explorers consisting of mage X 1, priest X 1, scout X 1, and tribal warrior X " + Math.floor(Math.random()*6+1) + situation;
	return value;
	}
	
// Caches
function cacheGenerator(value) {
var randomNumber = Math.floor(Math.random()*20+1);

switch(randomNumber) {
	case 1: value = "Cache discovery: Rain catcher and mess kit";
break;
	case 2: value = "Cache discovery: 10-day supply of rations";
break;
	case 3: value = "Cache discovery:  20-day supply of rations";
break;
	case 4: value = "Cache discovery:  30-day supply of rations";
break;	
	case 5: value = "Cache discovery: " + Math.floor(Math.random()*4+1) + " casks of water containing 5 gallons each";
break;	
	case 6: value = "Cache discovery: " + Math.floor(Math.random()*4+1) + " casks of tej";
break;	
	case 7: value = "Cache discovery: " + Math.floor(Math.random()*4+1) + " climber’s kits";
break;		
	case 8: value = "Cache discovery: Coffer containing " + Math.floor(Math.random()*8+1) + " vials of antitoxin";
break;		
	case 9: value = "Cache discovery: 20-day supply of insect repellant";
break;		
	case 10: value = "Cache discovery: " + Math.floor(Math.random()*4+1) + " quivers containing " + Math.floor(Math.random()*20+1) + " arrows each";
break;		
	case 11: value = "Cache discovery: Canoe with 6 paddles";
break;		
	case 12: value = "Cache discovery: 2 hooded lanterns and 10 flasks of lamp oil";
break;		
	case 13: value = "Cache discovery: 2-person tent and " + Math.floor(Math.random()*4+1) + " explorer’s packs";
break;		
	case 14: 
		value = "Cache discovery: Wooden box containing " + Math.floor(Math.random()*20+1) + " daggers, low quality"; 
		break;
	case 15: value = "Cache discovery: Set of navigator’s tools"; 
		break;		
	case 16: value = "Cache discovery: " + Math.floor(Math.random()*10+1) + " changes of woolen clothing";
		break; 
	case 17: value = "Cache discovery: Set of cartographer’s tools";
		break;
	case 18: value = "Cache discovery: 2-person tent and " + Math.floor(Math.random()*4+1) + " healer’s kits";
break;
	case 19: value = "Cache discovery: 2-person tent X 2, folding camp table, and 4 folding stools";
break;
	case 20: value = "Cache discovery: Wooden box containing " + Math.floor(Math.random()*8+1) + " potions of healing";
break;			
				   }
	
	return value;
						 }

// Treasure
function treasureGenerator(value) { 
var randomNumber = Math.floor(Math.random()*100+1);

switch(randomNumber) {
	case 1: 
	case 2: 
	case 3: 
	case 4: 
	case 5: 
	case 6: 
	case 7: 
	case 8: 
	case 9: 
	case 10: 
	case 11: 
	case 12: 
	case 13: 
	case 14: 
	case 15: 
	case 16: 
	case 17: 
	case 18: 
	case 19: 
	case 20: 
	case 30: 
	case 31: 
	case 32: 
	case 33: 
	case 34: 
	case 35: 
	case 36: 
	case 37: 
	case 38: 
	case 39: 
	case 40: 
	case 41: 
	case 42: 
	case 43: 
	case 44: 
	case 45: 
	case 46: 
	case 47: 
	case 48: 
	case 49:
	case 50: value = "No treasure";
break;		
	case 51: 
	case 52: value = "Map to " + locationGenerator(value) + " (250 gp)";
break;		
	case 53: 		
	case 54: value = "Pouch containing gemstones (10 gp) X " + Math.floor(Math.random()*4+1);
break;		
	case 55:
	case 56: value = "Malachite ring inlaid with electrum (50 gp)";
break; 
	case 57: 
	case 58: value = "Empty corked vial made from an aaracocra's wing bone";
break;
	case 59: 
	case 60: value = "Rotting quiver containing silvered arrows X " + Math.floor(Math.random()*10+1);
break;		
	case 61: 
	case 62: value = "Gold nugget the size of a dwarf's fist (50 gp) X 1";
break;		
	case 63: 
	case 64: value = "Stoppered vial of serpent's venom";
break;		
	case 65: 
	case 66: value = "Engraved ivory smoking pipe (25 gp)";
break; 
	case 67: 
	case 68: value = "Case containing insect repellant incense X " + Math.floor(Math.random()*24+1);
break;
	case 69: 
	case 70: value = "Iron token  bearing the symbol of a triceratops (the sigil of Ytepka Society) (50 gp)";
break;		
	case 71: 
	case 72: value = "Potion of animal friendship"; break;		
	case 73:  
	case 74: value = "Potion of vitality"; break;		
	case 75: 
	case 76: value = "First level spell scroll";
break; 
	case 77: 
	case 78: value = "Vial of wyvern poison";
break;
	case 79: 
	case 80: value = "Obsidian knife (25 gp)";
break;		
	case 81: 		
	case 82: value = "Wooden tube containing gemstones (50 gp) X " + Math.floor(Math.random()*4+1);
break;		
	case 83: 
	case 84: value = "Small onyx orb with maze-like patterns carved into its surface (usable as a druidic or arcane focus) (75 gp)";
break;		
	case 85: 
	case 86: value = "Batiri goblin maskmade of painted wood, set with gemstones (10 gp) X 9";
break; 
	case 87:
	case 88:  value = "Spyglass (1000 gp)";
break;
	case 89: 
	case 90: value = "Lute with one broken string (35 gp)";
break;		
	case 91: 
	case 92: value = "Set of thieves' tools (25 gp)";
break;		
	case 93: 
	case 94: value = "Excellent lock (DC 20 Dex) with missing key (50 gp)";
break;		
	case 95: 
	case 96: value = "Jar of Keoghtom's ointment";
break; 
	case 97: 
	case 98: value = "Horn of blasting";
break;
	case 99: 
	case 100: value = "Wand of secrets";
break;			
}
return value;	
}

// Location Generator
function locationGenerator(value) { 
var randomNumber = Math.floor(Math.random()*44+1);

switch(randomNumber) {
	case 1: value = "Aldani Basin (p. 41)"; break;
	case 2: value = "Ataaz Kahakla (p. 41)"; break;
	case 3: value = "Ataaz Muhahah (p. 41)"; break;
	case 4: value = "Ataaz Yklwazi (p. 42)"; break;	
	case 5: value = "Camp Righteous (p. 43)"; break;	
	case 6: value = "Camp Vengeance (p. 47)"; break;	
	case 7: value = "The Cauldron (p. 49)"; break;		
	case 8: value = "Dungrunglung (p. 49)"; break;		
	case 9: value = "Firefinger (p. 52)"; break;		
	case 10: value = "Fort Beluarian (p. 55)"; break;		
	case 11: value = "Heart of Ubtao (p. 58)"; break;		
	case 12: value = "Hrakhamar (p. 60)"; break;		
	case 13: value = "Hvalspyd (p. 64)"; break;		
	case 14: value = "Ishau (p. 64)"; break;		
	case 15: value = "Jahaka Anchorage (p. 64)"; break;		
	case 16: value = "Kir Sabal (p. 68)"; break; 
	case 17: value = "Kitcher's Inlet (p. 72)"; break;
	case 18: value = "Lake Luo (p. 72)"; break;
	case 19: value = "the Land of Ash and Smoke (p. 72)"; break;
	case 20: value = "Mbala (p. 72)"; break;
	case 21: value = "Mezro (p. 73)"; break;
	case 22: value = "Mistcliff (p. 73)"; break;
	case 23: value = "Nangalore (p. 73)"; break;
	case 24: value = "Needle's Bones (p. 80)"; break;
	case 25: value = "the ruined palace of Ras Nsi (p. 72)"; break;
	case 26: value = "Omu (p. 91)"; break;
	case 27: value = "Orolunga (p. 80)"; break;
	case 28: value = "Port Castigliar (p. 82)"; break;
	case 29: value = "Refuge Bay (p. 82)"; break;
	case 30: value = "the River Orlung (p. 82)"; break;		
	case 31: value = "the River Soshenstar (p. 82)"; break;		
	case 32: value = "the River Tath (p. 82)"; break;		
	case 33: value = "the River Tiryki (p. 82)"; break;		
	case 34: value = "Shilku (p. 82)"; break;		
	case 35: value = "Skilku Bay (p. 83)"; break;		
	case 36: value = "Snout of Omgar (p. 83)"; break; 
	case 37: value = "Valley of Dread (p. 83)"; break;
	case 38: value = "Valley of Embers (p. 83)"; break;
	case 39: value = "Valley of Lost Honor (p. 83)"; break;
	case 40: value = "Vorn (p. 83)"; break;		
	case 41: value = "the Wreck of the Narwhal (p. 84)"; break;		
	case 42: value = "the Wreck of the Star Goddess (p. 84)"; break;		
	case 43: value = "Wyrmheart Mine (p. 85)"; break;		
	case 44: value = "Yellyark village (p. 89)"; break;				
}
return value;	
}

// Default Terrain
function defaultTerrain(value) {
var randomNumber = Math.floor(Math.random()*9+1);

switch(randomNumber) {
	case 1: value = "river";
break;
	case 2: value = "beach";
break;
	case 3: value = "jungle-noUndead";
break;
	case 4: value = "jungle-lesserUndead";
break;	
	case 5: value = "jungle-greaterUndead";
break;	
	case 6: value = "ruins";
break;	
	case 7: value = "swamp";
break;		
	case 8: value = "wasteland";
break;		
	case 9: value = "mountains";
break;

}
	
	return value;
						 }

// ENCOUNTER FUNCTIONS
// Encounter Generator
function encounterGenerator(value,terrainValue) {

var encounterNumber = Math.floor(Math.random()*20+1);
	
	if ( encounterNumber <= 16) {
		value = "Uneventful travel, no encounters.";
	}
	else {
		
		switch(terrainValue) {
		case "beach": 
			value = beachEncounter(value);
			break;
		case "jungle-noUndead": 
			value = jungleNoUndeadEncounter(value);
			break;
		case "jungle-lesserUndead": 
			value = lesserUndeadEncounter(value);
			break;
		case "jungle-greaterUndead": 
			value = jungleGreaterUndeadEncounter(value);
			break;
		case "mountains": 
			value = mountainEncounter(value);
			break;
		case "rivers": 
			value = riverEncounter(value);
			break;
		case "swamp": 
			value = swampEncounter(value);
			break;
		case "wasteland": 
			value = wastelandEncounter(value);
			break;
		case "ruins": 
			value = ruinsEncounter(value);
			break;
		
	}
	}
		
		return value;
	}
		
function jungleConditionsGeneratorDefault (value) {
	
value = {weather:"",morningEncounter:"",middayEncounter:"",nightEncounter:"",terrain:""};

var defaultTerrainTemp = "";
defaultTerrainTemp = defaultTerrain(defaultTerrainTemp);
switch(defaultTerrainTemp) {
	case "beach": value.terrain = "Beach"; break;
	case "jungle-noUndead": value.terrain = "Jungle (No Undead)"; break;
	case "jungle-lesserUndead": value.terrain = "Jungle (Lesser Undead)"; break;
	case "jungle-greaterUndead": value.terrain = "Jungle (Greater Undead)"; break;
	case "mountains": value.terrain = "Mountains"; 	break;
	case "rivers": value.terrain = "Rivers"; break;
	case "ruins": value.terrain = "Ruins"; 	break;
	case "swamp": value.terrain = "Swamp"; 	break;		
	case "wasteland": value.terrain = "Wasteland"; 	break; 		
	
}



	
var morningEncounterTemp = encounterGenerator(morningEncounterTemp,defaultTerrainTemp);
value.morningEncounter = morningEncounterTemp;
	
var middayEncounterTemp = "";
value.middayEncounter = encounterGenerator(middayEncounterTemp,defaultTerrainTemp);
	
var nightEncounterTemp = "";
value.nightEncounter = encounterGenerator(nightEncounterTemp,defaultTerrainTemp);


	
// Weather
var weatherNumber = Math.floor(Math.random()*20+1);


	if (weatherNumber <= 16 ) {
		value.weather = "Occasional light rain: proceed as normal";
	}
	else if (weatherNumber >= 17 && weatherNumber <= 19) {
		value.weather = "Heavy rain: Visibility limited to 150 feet";
	}
	else {
		value.weather = "Tropical storm: travel by canoe impossible, travel on foot gains 1 level of exhaustion, DC 10 Constitution save for another. Disadvantage on checks to avoid becoming lost.";
	}
	
	
	return value;
}

function jungleConditionsGenerator (value) {
	
value = {weather:"",morningEncounter:"",middayEncounter:"",nightEncounter:"",terrain:""};

	// Terrain 
var terrainValue = 
	$('input[name="terrainForm"]:checked').val();
	
if (terrainValue === undefined) {
	alert("Please select a terrain.");
}
else {
	
switch(terrainValue) {
	case "beach": value.terrain = "Beach"; break;
	case "jungle-noUndead": value.terrain = "Jungle (No Undead)"; break;
	case "jungle-lesserUndead": value.terrain = "Jungle (Lesser Undead)"; break;
	case "jungle-greaterUndead": value.terrain = "Jungle (Greater Undead)"; break;
	case "mountains": value.terrain = "Mountains"; 	break;
	case "rivers": value.terrain = "Rivers"; break;
	case "ruins": value.terrain = "Ruins"; 	break;
	case "swamp": value.terrain = "Swamp"; 	break;		
	case "wasteland": value.terrain = "Wasteland"; 	break; 		
	
}

	
var morningEncounterTemp = encounterGenerator(morningEncounterTemp,terrainValue);
value.morningEncounter = morningEncounterTemp;
	
var middayEncounterTemp = "";
value.middayEncounter = encounterGenerator(middayEncounterTemp,terrainValue);
	
var nightEncounterTemp = "";
value.nightEncounter = encounterGenerator(nightEncounterTemp,terrainValue);


	
// Weather
var weatherNumber = Math.floor(Math.random()*20+1);


	if (weatherNumber <= 16 ) {
		value.weather = "Occasional light rain: proceed as normal";
	}
	else if (weatherNumber >= 17 && weatherNumber <= 19) {
		value.weather = "Heavy rain: Visibility limited to 150 feet";
	}
	else {
		value.weather = "Tropical storm: travel by canoe impossible, travel on foot gains 1 level of exhaustion, DC 10 Constitution save for another. Disadvantage on checks to avoid becoming lost.";
	}
	
	
	return value;
}
	
	

}

$(function() {
  var output = "";
	output = jungleConditionsGeneratorDefault(output);
	document.getElementById("jungleWeather").innerHTML = output.weather;
	document.getElementById("jungleTerrain").innerHTML = output.terrain;
	document.getElementById("morningEncounter").innerHTML = output.morningEncounter;
	document.getElementById("middayEncounter").innerHTML = output.middayEncounter;
	document.getElementById("nightEncounter").innerHTML = output.nightEncounter;
});

$( "#jungleConditionsButton" ).click(function() {
	var output = "";
	output = jungleConditionsGenerator(output);

	
	document.getElementById("jungleWeather").innerHTML = output.weather;
	document.getElementById("jungleTerrain").innerHTML = output.terrain;
	document.getElementById("morningEncounter").innerHTML = output.morningEncounter;
	document.getElementById("middayEncounter").innerHTML = output.middayEncounter;
	document.getElementById("nightEncounter").innerHTML = output.nightEncounter;
	
});

	