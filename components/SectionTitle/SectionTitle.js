import React from 'react'

const SectionTitle = (props) => {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
                <div className="wpo-section-title">
                    <h2>{props.Title}</h2>
                    <p>Must explain to you how all this mistaken idea of denouncing pleasure
                        born and give you a complete account the system</p>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle;