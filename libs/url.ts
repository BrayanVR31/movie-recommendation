export const normalizeUrl = (...paths: string[]) => {
	return paths.reduce((accumulator, currentValue)=>{
		const splittedPath = currentValue.split("/").filter(path=>path); 
		const middleSep = accumulator==="/"?"":"/";
		return accumulator + middleSep + splittedPath.join(""); 
	}, "/");
}