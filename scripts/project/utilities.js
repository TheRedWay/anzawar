export function clamp(value, lower, upper)
{
	return value > upper ? upper : value < lower ? lower : value;
}

