import useGamesCollection from "@hooks/useGamesCollection";

const GameGallery = () => {

    const { collection } = useGamesCollection();

    return (
        <ul>
            { collection.map((game, index) => (
                <li key={ index }>{ game.name }</li>
            )) }
            
        </ul>
    );
}

export default GameGallery;