// const marvelHeroes = ["ironman", "spiderman", "thor", "hulk"]
// const dc = ["superman", "batman", "wonderwoman", "flash"]

// const allHeroes = marvelHeroes.concat(dc);
// console.log(allHeroes);

// const allHeroes2 = [...marvelHeroes, ...dc];
// console.log(allHeroes2);

// const allHeroes3 = [...marvelHeroes, "black panther", ...dc];
// console.log(allHeroes3);

// const [first, second, ...rest] = allHeroes3;
// console.log(first);
// console.log(second);
// console.log(rest);

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);


// const allHeros = marvel_heros.concat(dc_heros)    //concat operator
// console.log(allHeros);

const all_new_Heros2 = [...marvel_heros, ...dc_heros] //spread operator
// console.log(all_new_Heros2);   

const another_array = [1, 2, 3, [4, 5, 6,[7, 8, 9, 10]]]
const real_another_array  = another_array.flat(Infinity)  //flat method
console.log(real_another_array);