import Image from "next/image";
import { getMovies } from "@/services/movies";

export default async function Home() {
    const { results=[]} = await getMovies();
    console.log(results);
    return results.map(result=>(
<Image key={result.id} alt={result.title} src={result.poster_path}/>
        ))
}