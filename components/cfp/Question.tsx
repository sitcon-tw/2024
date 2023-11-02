'use client'
import { useState } from 'react'

export default function Question(props: {question:string, answer:string}) {
    const [open, setOpen] = useState(false);

    function toggleOpen() {
        setOpen(!open);
    }

    function answer() {
        if (open) {
            return (
                <p className="mt-4">{props.answer}</p>
            );
        }
    }

    function question() {
        if (open) {
            return (
                <p className="cursor-pointer font-bold" onClick={toggleOpen}>{props.question}</p>
            );
        } else {
            return (
                <p className="cursor-pointer" onClick={toggleOpen}>{props.question}</p>
            );
        }
    }

    return (
        <div className="py-4 border-b-[#E5C366] border-b">
            {question()}
            {answer()}
        </div>
    );
}