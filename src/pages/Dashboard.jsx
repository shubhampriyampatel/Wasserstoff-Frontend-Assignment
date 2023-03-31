import { useEffect, useState } from 'react'
import { Downarrow } from '../components/Downarrow'
import { Uparrow } from '../components/Uparrow'
import styles from '../styles/dashboard.module.css'
import {useNavigate} from 'react-router-dom'
import { Target } from '../components/Target'
import { Presentation } from '../components/Presentation'
import { Bubble } from '../components/Bubble'

export const Dashboard = () => {
    const [data, setData] = useState({});
    const [zoom, setZoom] = useState(0);
    const navigate = useNavigate();
    const [dataTime, setDataTime] = useState('3months');
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        fetchData();
    },[dataTime]);

    const fetchData = () => {
        setIsLoading(true);
        fetch(`https://dackend-data.onrender.com/${dataTime}`)
        .then(res => res.json())
        .then(res => {
            setData(res);
            if(!res.total_earning) {
                navigate('/');
            }
        })
        .catch(err => {
            console.log(err, 'error');
            alert('something went wrong');
            navigate('/');
        })
        .finally(() => {
            setIsLoading(false);
        })
    }

    if(isLoading) {
        return <div className={styles.loading}>
            <div></div>
        </div>
    }

  return (
    <div className={styles.dashboard_div}>
        <div>
            <div className={styles.dash_info}>
                <h1>
                    Design faster
                </h1>
                <div className={styles.target_div}>
                    <div className={styles.target}>
                        <Target />
                    </div>
                    <h3>Total earning</h3>
                    <div className={styles.totalEarning}>
                        <h4>${data.total_earning}</h4>
                        <div>
                            <Uparrow color={'#00B929'} />
                            <p>2%</p>
                        </div>
                    </div>
                    <p className={styles.compared}>Compare to ${data.last_year_earning} last year</p>
                    <Presentation data={data} />
                </div>
                <div className={styles.purple_div}>
                    <div>
                        <h4>Total earning</h4>
                        <div>
                            <h3>${data.total_earning}</h3>
                            <div>
                                <Uparrow color={'#38F261'}/>
                                <p className={styles.percentage}>{data.earning_hike}%</p>
                            </div>
                        </div>
                        <p>Compared to ${data.last_year_earning} last year</p>
                    </div>
                    <hr />
                    <div>
                        <h4>Sales</h4>
                        <div>
                            <h3>${data.sales}</h3>
                            <div>
                                <Uparrow color={'#38F261'} />
                                <p className={styles.percentage}>{data.sales_hike}%</p>
                            </div>
                        </div>
                        <p>Compared to ${data.last_year_earning} last year</p>
                    </div>
                </div>
                <div className={styles.values_div}>
                    <div>
                        <h6>Travel</h6>
                        <p>760</p>
                        <p>2,540</p>
                        <Uparrow color={'#00B929'} />
                    </div>
                    <div>
                        <h6>Presentation</h6>
                        <p>650</p>
                        <p>2,304</p>
                        <Downarrow />
                    </div>
                    <div>
                        <h6>Business</h6>
                        <p>612</p>
                        <p>2,140</p>
                        <Uparrow color={'#00B929'} />
                    </div>
                </div>
            </div>
            <div className={styles.dash_bubble}>
                <Bubble data={data} zoom={zoom} setZoom={setZoom} dataTime={dataTime} setDataTime={setDataTime} />
            </div>
        </div>
    </div>
  )
}
