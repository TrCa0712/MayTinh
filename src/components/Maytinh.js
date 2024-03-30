import React, { useState } from 'react';
import './maytinh.css';

const Maytinh = () => {
    const [inputValue, setInputValue] = useState('');

    const addToInput = (value) => {
        setInputValue((prevValue) => prevValue + value);
    };

    const removeAll = () => {
        setInputValue('');
    };

    const removeLast = () => {
        setInputValue((prevValue) => prevValue.slice(0, -1));
    };

    const calculate = () => {
        try {
            setInputValue(eval(inputValue).toString());
        } catch (error) {
            setInputValue('Error');
        }
    };

    return (
        <div className='contain'>
            <h4>ELECTRONIC CALCULATOR</h4>
            <input type="text" value={inputValue} readOnly />
            <table>
                <tbody>
                    <tr>
                        <td><input type="button" value="C" onClick={removeAll} /></td>
                        <td><input type="button" value="<" onClick={removeLast} /></td>
                        <td><input type="button" value="/" onClick={() => addToInput('/')} /></td>
                        <td><input type="button" value="X" onClick={() => addToInput('*')} /></td>
                    </tr>
                    <tr>
                        <td><input type="button" value="7" onClick={() => addToInput('7')} /></td>
                        <td><input type="button" value="8" onClick={() => addToInput('8')} /></td>
                        <td><input type="button" value="9" onClick={() => addToInput('9')} /></td>
                        <td><input type="button" value="-" onClick={() => addToInput('-')} /></td>
                    </tr>
                    <tr>
                        <td><input type="button" value="4" onClick={() => addToInput('4')} /></td>
                        <td><input type="button" value="5" onClick={() => addToInput('5')} /></td>
                        <td><input type="button" value="6" onClick={() => addToInput('6')} /></td>
                        <td><input type="button" value="+" onClick={() => addToInput('+')} /></td>
                    </tr>
                    <tr>
                        <td><input type="button" value="1" onClick={() => addToInput('1')} /></td>
                        <td><input type="button" value="2" onClick={() => addToInput('2')} /></td>
                        <td><input type="button" value="3" onClick={() => addToInput('3')} /></td>
                        <td rowSpan="2"><input type="button" value="=" onClick={calculate} /></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><input type="button" value="0" onClick={() => addToInput('0')} /></td>
                        <td><input type="button" value="." onClick={() => addToInput('.')} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Maytinh;
