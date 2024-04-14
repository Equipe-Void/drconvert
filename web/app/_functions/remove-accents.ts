export function remove_accents(strAccents: string) {
	var sAccents = strAccents.split("");
	var strAccentsOut: string[] = [];
	var strAccentsLen = sAccents.length;
	var accents =
		"ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëÇçðÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž";
	var accentsOut =
		"AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeCcdDIIIIiiiiUUUUuuuuNnSsYyyZz";
	for (var y = 0; y < strAccentsLen; y++) {
		if (accents.indexOf(strAccents[y]) != -1) {
			strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
		} else strAccentsOut[y] = strAccents[y];
	}
	var strOut = strAccentsOut.join("");
	strOut = strOut.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
	strOut = strOut.replace(/[^a-z0-9\s]/gi, "").replace(/[-\s]/g, "_");

	return strOut.toLowerCase();
}
