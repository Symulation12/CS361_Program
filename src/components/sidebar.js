import React from 'react';
import gear from '../icons/highqualitygearicon.png';
import plus from '../icons/highqualityplusicon.png';
import minus from '../icons/highqualityminusicon.png';

export default function Sidebar({sources, setSource, addSource, removeSource, selectedSource})
{
    return (
        <>
            <a className="menu-link" href="#menu">
                <span />
            </a>
            <div id="menu">
                <div className="pure-menu">
                    <div className="pure-menu-heading">
                        <a href="/settings">
                            <img id="settings" src={gear} width="32" height="32" alt=""/>
                        </a>
                        <img onClick={addSource} id="addFeed" src={plus} width="32" height="32" alt=""/>
                        <img onClick={removeSource} id="removeFeed" src={minus} width="32" height="32" alt=""/>
                    </div>
                    

                    <ul className="pure-menu-list">
                        {(() => {
                            let output = []
                            const selectedSourceIndex = sources.indexOf(selectedSource);
                            for(let i = 0; i < sources.length; i++)
                            {
                                const classNameToSet = i === selectedSourceIndex ? "pure-menu-item pure-menu-selected" : "pure-menu-item"
                                output.push(<li key={i} className={classNameToSet}>
                                    <button type="button" className="pure-menu-link" onClick={setSource}>{sources[i]}</button>
                                </li>)
                            }
                            return output;
                        })()}
                    </ul>
                </div>
            </div>
        </>
    );
}