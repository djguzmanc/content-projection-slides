import React, { useState } from 'react';
import './FormContainer.css';

const FormContainer = () => {

    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="form-container">
            <section>
                This is a fancy form
            </section>
            <form className="form">
                <label for="name">Name</label>
                <input name="name" />

                <label for="age">Age</label>
                <input name="age" type="number" />

                <button type="submit" onClick={() => setIsLoading(true)}>
                    {isLoading ? 'Loading' : 'Save data'}
                </button>
            </form>
        </div>
    );
};

export default FormContainer;
