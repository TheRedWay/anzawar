/*

import {Battle_tick} from "./battles.js";


let Menu_Layouts = ["Eidos", "Loader", "Menu", "Campaign", "Ending", "Win"];

runOnStartup(async runtime =>
{
	// Код который запускается на этапе загрузки.
	// Обратите внимание, что макеты, объекты и т.д. пока недоступны.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime) // On start of Layout
{
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime) // Every Tick
{
	if (!Menu_Layouts.includes(runtime.layout.name)) // Только для битв
	{	
		Battle_tick(runtime);
	}
}

*/