import  React  from  'react';

const  GenerateQuote = ({ selectQuote }) => {
    return (
        <div  className="GenerateQuote">
        <button  onClick={selectQuote}>Characters</button>
        </div>
    );
};

export  default  GenerateQuote;