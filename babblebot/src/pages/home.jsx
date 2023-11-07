import React, { useRef } from "react";
import { firestore } from '../firebase';
import { addDoc, collection } from '@firebase/firestore';

export default function Home() {
    const messageRef = useRef();
    const ref = collection(firestore, 'messages');

    const handleSave = async (e) => {
        e.preventDefault();
        console.log(messageRef.current.value);

        let data = {
            message:messageRef.current.value,
        }
        try {
            addDoc(ref, data)
        }catch(e) {
            console.log(e);
        }
    };
    return (
        <div style={{ height: '150px', width: '400px', border: '3px solid black', borderRadius: '10px', margin: 'auto', marginTop: '20px', backgroundColor: 'lightblue'  }}>
            <div style={{ width: 'fit-content', margin: 'auto' }}>
                <form onSubmit={handleSave}>
                    <h2>Data Test</h2>
                    <input type='text' ref={messageRef} />
                    <button type='submit' style={{ margin: '10px' }}>Submit</button>
                </form>
            </div>
        </div>
    )
}