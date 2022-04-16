import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'Will Smith', img: expert1 },
    { id: 2, name: 'David Warner', img: expert2 },
    { id: 3, name: 'Doin Smith', img: expert3 },
    { id: 4, name: 'Stive Smith', img: expert4 },
    { id: 5, name: 'Grame Smith', img: expert5 },
    { id: 6, name: 'Adam Smith', img: expert6 }
]

const Experts = () => {
    return (
        <div className='container'>
            <h1 className='bg-primary p-3 text-white text-center mt-5'>Team of Our Experts</h1>

            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}

                    ></Expert>)
                }

            </div>


        </div>
    );
};

export default Experts;