import React, { useState, useRef, useEffect } from 'react';

const TextAreaWithScroll = () => {
    const [text, setText] = useState('');
    const textareaRef = useRef(null);

    const appendText = () => {
        // Generate new text to append
        const newText = `New text added at ${new Date().toLocaleTimeString()}\n`;
        //setText((pText) => pText + newText);
        let textdata = text + newText;
        setText(textdata);
    };

    useEffect(() => {
        // Scroll to the bottom of the textarea when the text is updated
        if (textareaRef.current) {
            textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
        }
    }, [text]);

    return (
        <div>
            <textarea
                ref={textareaRef}
                rows="10"
                cols="50"
                value={text}
                readOnly
            />
            <button onClick={appendText}>Append Text</button>
        </div>
    );
};

export default TextAreaWithScroll;
