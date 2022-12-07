import react,{useState,useEffect} from 'react'

const Calculadora = () => {

    const [display,setDisplay] = useState('')
    const [result,setResult] = useState(0)

    const clickButton = (event) => {
        const v = event.target.value
        if (display.length < 24){
            if (display.length === 0){
                setDisplay(v)
            }else{
                setDisplay(prevState => prevState + v)
            }
        }
    }

    const clickReset = () => {
        setDisplay(0)
    }

    const resultOperation = () => {

    }

    return (
        <div>
            <div id="calculator-container">
                <div id="header-calculator">
                    <div className="display">
                        <span id="display-screen">{display}</span>
                        <span>{result}</span>
                    </div>
                </div>
                <div className="container-button" id="main-calculator">
                    <button value="(" onClick={clickButton}>(</button>
                    <button value=")" onClick={clickButton}>)</button>
                    <button value="!" onClick={clickButton}>x!</button>
                    <button value={'\u00B2'} onClick={clickButton}>x<sup>2</sup></button>
                    <button value={'\u221A'} onClick={clickButton}>{'\u221A'}</button>
                    <button value={'n\u221A'} onClick={clickButton}><sup>n</sup>{'\u221A'}</button>
                    <button value="se" onClick={clickButton}>sin</button>
                    <button value="cos" onClick={clickButton}>cos</button>
                    <button value="tg" onClick={clickButton}>tg</button>
                    <button value={'\u00B3'} onClick={clickButton}>x<sup>3</sup></button>
                    <button value={'\u00B3' + '\u221A'} onClick={clickButton}><sup>3</sup>{'\u221A'}</button>
                    <button value="" onClick={clickButton}>x<sup>n</sup></button>
                    <button value="1" onClick={clickButton} className="number">1</button>
                    <button value="2" onClick={clickButton} className="number">2</button>
                    <button value="3" onClick={clickButton} className="number">3</button>
                    <button value="/" onClick={clickButton} className="arithmetic">/</button>
                    <button value="" onClick={clickButton}>%</button>
                    <button value="ln" onClick={clickButton}>ln</button>
                    <button value="4" onClick={clickButton} className="number">4</button>
                    <button value="5" onClick={clickButton} className="number">5</button>
                    <button value="6" onClick={clickButton} className="number">6</button>
                    <button value="*" onClick={clickButton} className="arithmetic">*</button>
                    <button value="log" onClick={clickButton}>log</button>
                    <button value="e" onClick={clickButton}>e</button>
                    <button value="7" onClick={clickButton} className="number">7</button>
                    <button value="8" onClick={clickButton} className="number">8</button>
                    <button value="9" onClick={clickButton} className="number">9</button>
                    <button value="-" onClick={clickButton} className="arithmetic">-</button>
                    <button value="" onClick={clickReset} className="reset">AC</button>
                    <button value="=" onClick={resultOperation} className="equal-simbol">=</button>
                    <button value="." onClick={clickButton} >.</button>
                    <button value="0" onClick={clickButton} className="number">0</button>
                    <button value={Math.PI} onClick={clickButton}>{'\u220F'}</button>
                    <button value="+" onClick={clickButton} className="arithmetic">+</button>
                    <button value="" onClick={clickButton}>MR</button>
                </div>
            </div>
        </div>


    )


}

export default Calculadora