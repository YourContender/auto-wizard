import React, { useState } from 'react'

export const FeedbackForms = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', problem: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Введіть ім'я";
        if (!formData.phone.trim()) newErrors.phone = "Введіть телефон";
        if (!formData.problem.trim()) newErrors.problem = "Опишіть проблему";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setSubmitted(true);
        }
    };

    return (
        <div className="feedback__container-block-forms-wrap-field">
            {submitted ? (
                <div className="feedback__success-message animate-fade-in">
                    ✅ Ваш запит успішно надіслано!
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="feedback__container-block-forms-wrap-field-input">
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ваше ім'я"
                        />
                        {errors.name && <div className="error-text">{errors.name}</div>}
                    </div>

                    <div className="feedback__container-block-forms-wrap-field-phone">
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Ваш телефон"
                        />
                        {errors.phone && <div className="error-text">{errors.phone}</div>}
                    </div>

                    <div className="feedback__container-block-forms-wrap-field-problem">
                        <textarea
                            name="problem"
                            value={formData.problem}
                            onChange={handleChange}
                            placeholder="Опишіть вашу проблему"
                        />
                        {errors.problem && <div className="error-text">{errors.problem}</div>}
                    </div>

                    <div className="feedback__container-block-forms-wrap-field-submit">
                        <button type="submit">Відправити</button>
                    </div>
                </form>
            )}
        </div>
    );
}
