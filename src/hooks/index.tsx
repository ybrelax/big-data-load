
import React, { useEffect, useState } from 'react';

import "./index.less"

function App() {
    const styles = {
        animateWrap: 'animateWrap',
        animate: 'animate',
        hidden: 'hidden'
    }
    const [user, setUser] = useState<Array<string>>([])
    useEffect(() => {
        let MAX_USER_COUNT = 2;
        let timer = setInterval(() => {
            setUser(prev => {
                prev.push(Date.now() + '')
                if (prev.length > MAX_USER_COUNT + 1) {
                    prev.shift()
                    return [...prev]
                } else {
                    return [...prev]
                }
            })
        }, 5000 * Math.random())
    }, [])

    return (
        <div className = "animateWrap">

            {user.map((item, i) => {
                return <div
                    className={

                        user.length > 2 && i === 0 ? styles.hidden + ' animate' : 'animate'
                    }
                    key={item}
                >
                    {/* <div className={styles.tx}>
                 <img src={tx} alt=""/>
               </div> */}
                    <span>李老师{item}上线</span>
                </div>
            })
            }
        </div>
    );
}

export default App;