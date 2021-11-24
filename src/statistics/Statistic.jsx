function Statistic({label, percentage }) {
    return (
       
  <ul className="stat-list">
    <li className="item">
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}</span>
    </li>
            </ul>
          
       
    )
    
}
        
export default Statistic
