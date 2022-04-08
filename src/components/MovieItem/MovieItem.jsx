

function MovieItem({movie}) {

    const handleDetailView = () => {
        console.log('clicked into HandleDetailView');
    }

    return (
        <>
            <div key={movie.id} >
                <h3>{movie.title}</h3>

                <img 
                onClick={handleDetailView}
                src={movie.poster} alt={movie.title} />
            </div>
        </>
    )
}



export default MovieItem;