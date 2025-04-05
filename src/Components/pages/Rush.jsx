import React from 'react';
import '../../App.css';
import './pagesCSS/Rush.css';
import RushOver from './RushOver';

function Rush() {
    // Set this to false when Rush is active
    const isRushOver = true;

    return (
        <div className="min-h-screen">
            <div className="RushPage">
                <div className='RushHead'>
                    <h1 className='font-bold'>RUSH</h1>
                </div>
            </div>
            {isRushOver ? <RushOver /> : (
                // Your active Rush content will go here
                <div>
                    {/* Rush content when active */}
                </div>
            )}
        </div>
    );
}

export default Rush;