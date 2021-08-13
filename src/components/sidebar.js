import React from 'react';
import gear from '../icons/highqualitygearicon.png';
import plus from '../icons/highqualityplusicon.png';
import minus from '../icons/highqualityminusicon.png';

export default function Sidebar({sources, selected})
{
    return (
        <>
            <a className="menu-link" href="#menu">
                <span />
            </a>
            <div id="menu">
                <div className="pure-menu">
                    <div className="pure-menu-heading">
                        <img id="settings" src={gear} width="32" height="32" alt=""/>
                        <img id="addFeed" src={plus} width="32" height="32" alt=""/>
                        <img id="removeFeed" src={minus} width="32" height="32" alt=""/>
                    </div>
                    

                    <ul className="pure-menu-list">
                        {(() => {
                            let output = []
                            for(let i = 0; i < sources.length; i++)
                            {
                                output.push(<li key={i} className="pure-menu-item">{sources[i]}</li>)
                            }
                            return output;
                        })()}
                    </ul>
                </div>
            </div>
        </>
    );
}