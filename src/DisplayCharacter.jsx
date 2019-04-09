import  React  from  'react';

const  DisplayCharacter = ({ character }) => {
    return (
        <div  className="DisplayCharacter">
            <h1>{character.character}</h1>
            <img  src={character.image}  alt="image"  />
            <p>{character.quote}</p>          
        </div>
    );
};

export  default  DisplayCharacter;