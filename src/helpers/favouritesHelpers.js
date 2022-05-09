export default {
    deleteFavourite: function(favourites, rovers){
        const storageFavourites = _.differenceWith(favourites, [{
            rover: rovers.rover,
            querys: rovers.querys,
            images: rovers.images
        }], _.isEqual);
        localStorage.setItem('favourites', JSON.stringify(storageFavourites))
        return storageFavourites;
    },
    addFavourite: function(favourites, rovers){
        let favouritesArray = favourites;
        favouritesArray.push({
            rover: rovers.rover,
            querys: rovers.querys,
            images: rovers.images
        });
        localStorage.setItem('favourites', JSON.stringify(favouritesArray))
    }
}