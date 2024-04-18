//provisorio para primer entrega
let usuarios = []

/*
a modo q se entienda asi seria el schema de usuarios:
{
        id:51961065158918,
        name: "Mauricio",
        lastName: "Escalante",
        email: "mauescalante@uade.edu.ar",
        password: "password",
        favorito: [
            {
                movie_id: 1,
                title: "Kung fu panda",
                description: "Panda furioso",
                img: "https://image.tmdb.org/t/p/original/kungFu"
            }, {
                movie_id: 2,
                title: "La odisea de los giles",
                description: "Comedia",
                img: "https://image.tmdb.org/t/p/original/laOdisea"
            }
        ],
        verDespues: [ {
            movie_id: 3,
            title: "los vengadores",
            description: "description ",
            img: "https://image.tmdb.org/t/p/original/avengers"
        }, {
            movie_id: 4,
            title: "HarryPoter",
            description: "description2",
            img: "https://image.tmdb.org/t/p/original/harryPorter"
        }]
    }
*/

function createUser(user){
    //cuando se haga con DB, la password iria encriptada
    usuarios.push({
        name: user.name,
        lastName: user.lastName,
        email:  user.email,
        password: user.password,
        favoritos:[],
        verDespues:[]
    })
}

function removeToFavorites(entertainment,userId) {
    //para saber cual es el indice donde se encuentra el usuario buscado
    const userIndex = usuarios.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        const user = usuarios[userIndex];
        const movieIndex=user.favorito.findIndex(movie=> entertainment.id ===movie.id)
        //elimina de la listaa
        user.favorito.splice(movieIndex, 1);
      } 
   

}

function addFavorites(movie,userId) {
    //para saber cual es el indice donde se encuentra el usuario buscado
    const userIndex = usuarios.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        const user = usuarios[userIndex];
        user.favorito.push(movie); 
      } 
}

function getFavorites(userId) {
    const userIndex = usuarios.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        const user = usuarios[userIndex];
        return user.favorito
    }

}


function removeToWatchLater(entertainment,userId) {
    //para saber cual es el indice donde se encuentra el usuario buscado
    const userIndex = usuarios.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        const user = usuarios[userIndex];
        const movieIndex=user.verDespues.findIndex(movie=> entertainment.id ===movie.id)
        //elimina de la listaa
        user.verDespues.splice(movieIndex, 1);
      } 
   

}

function addToWatchLater(movie,userId) {
    //para saber cual es el indice donde se encuentra el usuario buscado
    const userIndex = usuarios.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        const user = usuarios[userIndex];
        user.verDespues.push(movie); 
      } 
}

function getWatchLater(userId) {
    const userIndex = usuarios.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        const user = usuarios[userIndex];
        return user.verDespues
    }

}

export default DAO
