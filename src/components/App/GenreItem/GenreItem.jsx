function GenreItem({ genre }) {
    return (//result of looping thru the array of genres for one film
        <>
            <p key={genre.id}>{genre.name}</p>
        </>
    )
}



export default GenreItem;