
import Statistic from './Statistic'
function StatisticList({ items }) {
    return (
        <section className="statistics">
            {items.map(item =>
               <Statistic  key={item.id} label={item.label} percentage={item.percentage} />
          )}  
        </section>
    )
}

export default StatisticList
