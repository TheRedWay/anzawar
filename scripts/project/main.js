/*
import * as Utils from "./utilities.js";

// Битва
import { battle_tick } from "./battle.js";
import { battle_start } from "./battle.js";

export let keyboard;

const Menu = ["Test", "Eidos", "Loader", "Campaign", "Menu", "Win", "Ending"];

runOnStartup(async runtime =>
{
	// Loader layout
	// Ничего не доступно
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
	
});

async function OnBeforeProjectStart(runtime)
{
	// On start of layout
	//Всё доступно
	
	keyboard = runtime.keyboard;
	
	setTimeout(() => {
    
	if (!(runtime.layout.name in Menu)) // Стартовый ивент - битвы
	{	
		battle_start(runtime);
	}

	runtime.addEventListener("tick", () => Tick(runtime));
	
	}, 100);

};


function Tick(runtime)
{
	
	if (!(runtime.layout.name in Menu)) // Every Tick - битвы
	{	
		battle_tick(runtime);
	}
	
}
*/